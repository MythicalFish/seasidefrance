import * as lodgify from '../../lib/lodgify-sdk';
import type { LodgifyRate } from './types';

let ratesCache: Record<string, LodgifyRate[]> = {};

const lodgifyFetchRates = async (
  apiKey = '',
  propertyId: number,
  roomTypeId: number,
  startDate: string,
  endDate: string
): Promise<LodgifyRate[]> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }

  const cacheKey = `${propertyId}-${roomTypeId}-${startDate}-${endDate}`;
  if (ratesCache[cacheKey]) {
    return ratesCache[cacheKey];
  }

  const config = new lodgify.Configuration({
    apiKey,
  });
  const api = new lodgify.RatesApi(config);

  try {
    // https://docs.lodgify.com/reference/ratescalendar-v2
    const res = await api.ratesCalendarV2({
      houseId: propertyId,
      roomTypeId,
      startDate,
      endDate,
    });

    if (res?.calendarItems) {
      const rates = res.calendarItems.map(item => ({
        propertyId,
        roomTypeId,
        date: item.date || '',
        isDefault: item.isDefault || false,
        prices: item.prices || [],
        rateSettings: res.rateSettings || {
          bookability: 'BookingRequest',
          currencyCode: 'EUR',
        },
      })) as LodgifyRate[];

      ratesCache[cacheKey] = rates;
      return rates;
    }
  } catch (error) {
    console.error('Error fetching rates:', error);
  }
  return [];
};

export default lodgifyFetchRates;
