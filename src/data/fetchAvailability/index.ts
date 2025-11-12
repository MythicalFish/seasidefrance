import * as lodgify from '../../lib/lodgify-sdk';
import type { Availability, AvailabilityPeriod } from './types';
import { getCachedData, setCachedData } from '../../lib/cache';
import { getLodgifyApiKey } from '@lib/env';

const fetchAvailability = async (
  propertyId = 0,
  startDate: string,
  endDate: string
): Promise<AvailabilityPeriod[] | null> => {
  const apiKey = getLodgifyApiKey();
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }

  if (!propertyId) {
    throw new Error('Property ID is not set');
  }

  // Try to get data from cache first
  const cachedData = await getCachedData<Availability[]>({
    type: 'availability',
    propertyId,
    startDate,
    endDate,
  });

  const cachedPeriods = cachedData?.[0]?.periods;
  const hasCachedPeriods = !!cachedPeriods?.length;
  if (hasCachedPeriods) return cachedPeriods;

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
      const periods = res[0]?.periods || [];

      // Cache the results
      await setCachedData(
        {
          type: 'availability',
          propertyId,
          startDate,
          endDate,
        },
        periods
      );

      return periods as AvailabilityPeriod[];
    }
  } catch (error: any) {
    console.error(
      `Error fetching availability for property ${propertyId} (${startDate} - ${endDate}): ${error?.response?.statusText}`
    );
  }
  return [];
};

export default fetchAvailability;
