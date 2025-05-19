import * as lodgify from '../../../lib/lodgify-sdk';
import type { LodgifyProperty } from '../types';

let properties: LodgifyProperty[] = [];

const lodgifyFetch = async (apiKey: string): Promise<LodgifyProperty[]> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }
  if (properties.length > 0) return properties;
  const config = new lodgify.Configuration({
    apiKey,
  });
  const api = new lodgify.PropertiesApi(config);
  try {
    const res = await api.getAllPropertiesAsync({
      includeCount: true,
      includeInOut: false,
      page: 1,
      size: 50,
    });
    if (res?.items) {
      properties = res.items as LodgifyProperty[];
      return res.items;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

export default lodgifyFetch;
