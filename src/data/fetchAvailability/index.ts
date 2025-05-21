import * as lodgify from '../../lib/lodgify-sdk';
import type { Availability } from './types';
import { getCachedData, setCachedData } from '../../lib/cache';

const apiKey = import.meta.env.LODGIFY_PUBLIC_KEY;

const fetchAvailability = async (
  propertyId = 0,
  startDate: string,
  endDate: string
): Promise<Availability> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }

  if (!propertyId) {
    throw new Error('Property ID is not set');
  }

  // Try to get data from cache first
  const cachedData = await getCachedData<Availability>({
    type: 'availability',
    propertyId,
    startDate,
    endDate,
  });

  if (cachedData) return cachedData;

  const config = new lodgify.Configuration({ apiKey });
  const api = new lodgify.ReservationsApi(config);

  try {
    // https://docs.lodgify.com/reference/getcalendarbyproperty
    const res = await api.getCalendarByProperty({
      propertyId,
      start: new Date(startDate),
      end: new Date(endDate),
      includeDetails: true,
    });

    if (res && res.length > 0) {
      const availability = res[0]?.periods || [];

      // Cache the results
      await setCachedData(
        {
          type: 'availability',
          propertyId,
          startDate,
          endDate,
        },
        availability
      );

      return availability;
    }
  } catch (error: any) {
    console.error(
      `Error fetching availability for property ${propertyId} (${startDate} - ${endDate}): ${error?.response?.statusText}`
    );
  }
  return [];
};

export default fetchAvailability;
