import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const basePrompt = `You are a professional holiday home marketing expert. Create a concise, compelling text for a holiday property. The title should be derived from the property's name (e.g., "Le Logis 5 bedroom house" becomes "5 bedroom cottage"). Keep the actual property name separate. The description should be engaging, highlighting unique features and the property's appeal to potential guests. Be specific about location benefits, amenities, and the overall experience. You respond ONLY with JSON.`;

async function optimizeProperty(property) {
  const prompt = `${basePrompt}

Please provide:
1. A concise title (without the property name), i.e. "5 bedroom cottage"
2. The actual property name, i.e. "Le Logis"
3. A short & appealing intro (max 200 characters)
4. A longer description with markdown formatting (max 1200 characters)
5. A list of features, i.e. "Wifi, Parking, Swimming Pool"

Your response must be a JSON object with the following keys: "name", "title", "intro", "description", "features". The values for these should be strings, except for "features" which should be an array of strings. The "description" should be a markdown formatted string.

Do not respond with anything other than the pure JSON object (no comments or explanation).

Property Name: ${property.name}
Property Description (includes HTML):

${property.description}
`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4o",
    temperature: 0.7,
  });

  const response = completion.choices[0].message.content;

  return JSON.parse(response);
}

async function main() {
  try {
    // Read the properties from the JSON file
    const propertiesPath = path.join(__dirname, '../src/data/properties.json');
    const properties = JSON.parse(await fs.readFile(propertiesPath, 'utf-8'));

    // Optimize each property
    const optimizedProperties = [];
    for (const property of properties) {
      console.log(`Optimizing property: ${property.name}`);
      const optimized = await optimizeProperty(property);
      optimizedProperties.push(optimized);
    }

    // Save the optimized properties
    const outputPath = path.join(__dirname, '../src/data/property-info.json');
    await fs.writeFile(outputPath, JSON.stringify(optimizedProperties, null, 2));
    console.log('Optimization complete! Results saved to optimized-properties.json');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main(); 