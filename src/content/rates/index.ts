import * as lodgify from '../../lib/lodgify-sdk';
import type { LodgifyRate } from './types';
import { getCachedData, setCachedData } from '../../lib/cache';

const apiKey = import.meta.env.LODGIFY_PUBLIC_KEY;

export const fetchRates = async (
  propertyId = 0,
  roomTypeId = 0,
  startDate: string,
  endDate: string
): Promise<LodgifyRate[]> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }

  if (!propertyId) {
    throw new Error('Property ID is not set');
  }

  if (!roomTypeId) {
    throw new Error('Room Type ID is not set');
  }

  // Try to get data from cache first
  const cachedData = await getCachedData<LodgifyRate[]>({
    type: 'rates',
    propertyId,
    roomTypeId,
    startDate,
    endDate,
  });

  if (cachedData) {
    return cachedData;
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

      // Cache the results
      await setCachedData(
        {
          type: 'rates',
          propertyId,
          roomTypeId,
          startDate,
          endDate,
        },
        rates
      );

      return rates;
    }
  } catch (error: any) {
    console.error(
      `Error fetching rates for property ${propertyId}/${roomTypeId} (${startDate} - ${endDate}): ${error?.response?.statusText}`
    );
  }
  return [];
};
