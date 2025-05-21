import * as lodgify from '../lib/lodgify-sdk';
import type { LodgifyProperty } from '../data/properties/types';
import { config } from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

config();
const apiKey = process.env.LODGIFY_PUBLIC_KEY;
if (!apiKey) throw new Error('LODGIFY_PUBLIC_KEY is not set');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '../data/_fixtures/properties.json');
const lodgifyConfig = new lodgify.Configuration({ apiKey });
const lodgifyAPI = new lodgify.PropertiesApi(lodgifyConfig);

const fetchProperties = async (): Promise<LodgifyProperty[]> => {
  const properties = await lodgifyAPI.getAllPropertiesAsync({
    includeCount: true,
    includeInOut: false,
    page: 1,
    size: 50,
  });

  if (!Array.isArray(properties) || properties.length === 0) {
    throw new Error('No properties found');
  }

  return properties;
};

async function main(): Promise<void> {
  try {
    console.log('ℹ️ Fetching properties');
    const properties = await fetchProperties();
    console.log(`ℹ️ Fetched ${properties.length} properties`);
    fs.writeFileSync(outputPath, JSON.stringify(properties, null, 2));
    console.log('✅ Properties updated');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
