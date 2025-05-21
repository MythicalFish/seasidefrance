import * as lodgify from '../../../lib/lodgify-sdk';
import type { LodgifyProperty } from '../types';
import { getCachedData, setCachedData } from '../../../lib/cache';

const lodgifyFetch = async (apiKey: string): Promise<LodgifyProperty[]> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }

  // Try to get data from cache first
  const cachedData = await getCachedData<LodgifyProperty[]>({
    type: 'properties',
  });

  if (cachedData) {
    return cachedData;
  }

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
      const properties = res.items as LodgifyProperty[];
      // Cache the results
      await setCachedData(
        {
          type: 'properties',
        },
        properties
      );
      return properties;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

export default lodgifyFetch;
