import * as lodgify from '../../lib/lodgify-sdk';
import type { MinStayPeriod } from './types';
import { getCachedData, setCachedData } from '../../lib/cache';

const apiKey = process.env.LODGIFY_PUBLIC_KEY;

const fetchRestrictions = async (propertyId: number): Promise<MinStayPeriod[]> => {
  if (!apiKey) {
    throw new Error('LODGIFY_PUBLIC_KEY is not set');
  }

  if (!propertyId) {
    throw new Error('Property ID is not set');
  }

  const cachedData = await getCachedData<MinStayPeriod[]>({
    type: 'restrictions',
    propertyId,
  });

  if (cachedData) {
    return cachedData;
  }

  const config = new lodgify.Configuration({ apiKey });
  const api = new lodgify.PropertiesApi(config);

  try {
    const property = await api.getPropertyByIdV2({
      id: propertyId,
      includeInOut: true,
    });

    const { inOut } = property;

    if (!inOut?.isRestricted || !inOut.checkIn) {
      return [];
    }

    const checkInDates = inOut.checkIn
      .map((d) => d.date)
      .filter((d): d is Date => !!d)
      .map((d) => d.toISOString().split('T')[0])
      .sort();

    if (checkInDates.length < 2) {
      return [];
    }

    const periods: MinStayPeriod[] = [];
    let start = checkInDates[0];
    let lastDate = start;
    let currentMinStay = -1;

    for (let i = 1; i < checkInDates.length; i++) {
      const currentDate = checkInDates[i];
      const prevDate = checkInDates[i - 1];

      const diff =
        (new Date(currentDate).getTime() - new Date(prevDate).getTime()) / (1000 * 60 * 60 * 24);

      if (currentMinStay === -1) {
        currentMinStay = diff;
      }

      if (diff !== currentMinStay) {
        periods.push({
          from: start,
          to: lastDate,
          minStay: currentMinStay,
        });
        start = currentDate;
        currentMinStay = diff;
      }
      lastDate = currentDate;
    }

    periods.push({
      from: start,
      to: lastDate,
      minStay: currentMinStay,
    });

    await setCachedData(
      {
        type: 'restrictions',
        propertyId,
      },
      periods
    );

    return periods;
  } catch (error: any) {
    console.error(
      `Error fetching restrictions for property ${propertyId}: ${error?.response?.statusText}`
    );
    return [];
  }
};

export default fetchRestrictions;
