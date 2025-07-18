import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import aboutTheArea from '@data/_fixtures/aboutTheArea';
import properties from '@data/_fixtures/property-pages.json';
import attractions from '@data/_fixtures/attractions';
const property = properties.find((p) => p.id === 375769);

config();
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) throw new Error('OPENAI_API_KEY is not set');

const openai = new OpenAI({ apiKey });
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const prompt = `

You are a holiday home marketing expert. You write beautiful and engaging descriptions for holiday homes and the surrounding area (without sounding too promotional, keeping it more understated). You include subtleties such as mentioning the appeal of lesser-known area, and the unique appeal of staying in a French chateau.

Please respond with these sections with markdown formatting:
1. Why visit Charente-Maritime (short intro text, 2 sentences)
2. Why visit (continued) including the unique appeal of the property (3 paragraphs)
3. A list of highlights and attractions in the region

Property Title: Domaine de Rochebonne

Property Description:
${property?.description}

About the area:
${aboutTheArea}

List of attractions:
${attractions}
`;

async function fetchAbout(): Promise<string> {
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
    console.log('🟢 Generating about...');
    console.log('');
    const outputPath = path.join(__dirname, '../data/_fixtures/about.md');
    const about = await fetchAbout();
    fs.writeFileSync(outputPath, about);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
