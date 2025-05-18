import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import { fetchProperties } from '../src/content/properties';
import type { Property } from '../src/content/properties';

// Load environment variables from .env file
config();

console.log('🟢🟢', process.env.OPENAI_API_KEY);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Verify required environment variables
const requiredEnvVars = ['OPENAI_API_KEY', 'LODGIFY_PUBLIC_KEY'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt = `You strictly output raw JSON, without backticks, comments or explanation. You first analyze the given title and description as a professional holiday home marketing expert, in order to provide the JSON object as described below.`;

async function optimizeProperty(property: Property): Promise<string> {
  const prompt = `${basePrompt}

Please provide:
1. A concise title (without the property name), i.e. "5 bedroom cottage"
2. The actual property name, i.e. "Le Logis"
3. A short & appealing intro (max 200 characters)
4. A longer description with markdown formatting (max 1200 characters). It should be engaging, highlighting unique features and the property's appeal to potential guests. 
5. A list of features, i.e. "Wifi, Parking, Swimming Pool"
6. A list of highlights

Your response must be a JSON object with the following keys: "name", "title", "intro", "description", "features", "highlights". The values for these should be strings, except for "features" and "highlights" which should be an array of strings. The "description" should be a markdown formatted string.

Do not respond with anything other than the raw JSON object (no backticks, comments or explanation).

Property Name: ${property.name}
Property Description (includes HTML):

${property.description}
`;

  let fullResponse = '';
  const stream = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o',
    temperature: 0.7,
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    if (content) {
      process.stdout.write(content);
      fullResponse += content;
    }
  }
  process.stdout.write('\n');

  if (!fullResponse) {
    throw new Error('No response from OpenAI');
  }

  return fullResponse;
}

async function main(): Promise<void> {
  try {
    const properties = (await fetchProperties(
      process.env.LODGIFY_PUBLIC_KEY as string
    )) as Property[];
    if (!Array.isArray(properties) || properties.length === 0) {
      throw new Error('No properties found');
    }

    const newData: string[] = [];
    for (const property of properties) {
      console.log(`🟢 Optimizing property: ${property.name}`);
      const optimized = await optimizeProperty(property);
      newData.push(optimized);
    }
    const fullJSONString = `[${newData.join(',')}]`;
    const fullJSON = JSON.parse(fullJSONString);

    const outputPath = path.join(__dirname, '../src/data/property-info.json');
    await fs.writeFile(outputPath, JSON.stringify(fullJSON, null, 2));
    console.log('Optimization complete! Results saved to property-info.json');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
