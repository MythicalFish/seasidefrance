const apiKey = import.meta.env.LODGIFY_PUBLIC_KEY;
import { fetchAvailability } from '../availability';
import { fetchRates } from '../rates';
import lodgifyFetch from './data/lodgifyFetch';

import type { Property, Rates } from './types';

import optimizedInfo from './data/optimizedInfo.json';
import type { RatesResponse } from '../rates/types';
const lodgifyInfo = await lodgifyFetch(apiKey || '');

const properties = (await Promise.all(
  optimizedInfo.map(async (property) => {
    const lodgify = lodgifyInfo.find((p) => p.id === property.id);
    const availability = await fetchAvailability(property.id, '2025-05-01', '2026-01-01');
    const propertyRates: RatesResponse[] = [];

    for (const { roomTypeId } of availability || []) {
      if (!roomTypeId) continue;
      const currentDate = new Date();
      const currentDateStr = currentDate.toISOString().split('T')[0];
      const oneYearFromNow = new Date(currentDate);
      oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);
      const oneYearFromNowStr = oneYearFromNow.toISOString().split('T')[0];
      const rates = await fetchRates(property.id, roomTypeId, currentDateStr, oneYearFromNowStr);
      propertyRates.push(rates);
    }

    return {
      ...property,
      lodgify,
      availability,
      rates: propertyRates,
    };
  })
)) as Property[];

export type { Property };

export default properties;
