import * as lodgify from '../../lib/lodgify-sdk';
import type { RatesResponse } from './types';
import { getCachedData, setCachedData } from '../../lib/cache';
import { getLodgifyApiKey } from '@lib/env';

const fetchRates = async (
  propertyId = 0,
  roomTypeId = 0,
  startDate: string,
  endDate: string
): Promise<RatesResponse> => {
  const apiKey = getLodgifyApiKey();
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
  const cachedData = await getCachedData<RatesResponse>({
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
    const rates = (await api.ratesCalendarV2({
      houseId: propertyId,
      roomTypeId,
      startDate,
      endDate,
    })) as RatesResponse;

    rates.calendarItems = rates.calendarItems?.map((item) => {
      // Remove unused attributes
      const price = item.prices?.[0];
      const newItem = {
        date: item.date,
        prices: [
          {
            minStay: price?.minStay,
            pricePerDay: price?.pricePerDay,
          },
        ],
      };
      if (item.isDefault) {
        // @ts-ignore
        newItem.isDefault = true;
      }
      return newItem;
    });

    if (rates?.calendarItems) {
      // Cache it (for build, not client)
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
  return {} as RatesResponse;
};

export default fetchRates;
