import * as lodgify from '../lib/lodgify-sdk';
import type { GetAllPropertiesAsync200ResponseItemsInner } from '../lib/lodgify-sdk';

export type Property = GetAllPropertiesAsync200ResponseItemsInner;

let properties: Property[] = [];

export const fetchProperties = async (apiKey: string): Promise<Property[]> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }
  if (properties.length > 0) return properties;
  const config = new lodgify.Configuration({
    apiKey,
  });
  console.log('🟢 fetchProperties');
  const api = new lodgify.PropertiesApi(config);
  try {
    const res = await api.getAllPropertiesAsync({
      includeCount: true,
      includeInOut: false,
      page: 1,
      size: 50,
    });
    if (res?.items) {
      properties = res.items as Property[];
      return res.items;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

const apiKey = process.env.LODGIFY_PUBLIC_KEY;
if (apiKey) {
  await fetchProperties(apiKey);
}

export default properties;
