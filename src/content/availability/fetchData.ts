import * as lodgify from '../../lib/lodgify-sdk';
import type { LodgifyAvailability } from './types';

let availabilityCache: Record<string, LodgifyAvailability[]> = {};

const lodgifyFetchAvailability = async (
  apiKey = '',
  propertyId: number,
  startDate: string,
  endDate: string
): Promise<LodgifyAvailability[]> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }

  const cacheKey = `${propertyId}-${startDate}-${endDate}`;
  if (availabilityCache[cacheKey]) {
    return availabilityCache[cacheKey];
  }

  const config = new lodgify.Configuration({
    apiKey,
  });
  const api = new lodgify.ReservationsApi(config);

  try {
    // https://docs.lodgify.com/reference/getcalendarbyproperty
    const res = await api.getCalendarByProperty({
      propertyId,
      start: new Date(startDate),
      end: new Date(endDate),
      includeDetails: true,
    });

    if (res) {
      availabilityCache[cacheKey] = res as LodgifyAvailability[];
      return res as LodgifyAvailability[];
    }
  } catch (error) {
    console.error('Error fetching availability:', error);
  }
  return [];
};

export default lodgifyFetchAvailability;
