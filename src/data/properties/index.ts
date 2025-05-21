import propertyPages from '../_fixtures/property-pages.json';
import propertyInfo from '../_fixtures/properties.json';
import { fetchAvailability } from '../availability';
import { fetchRates } from '../rates';

import type { PropertyPage, LodgifyProperty } from './types';

import type { RatesResponse } from '../rates/types';

const currentDate = new Date();
const currentDateStr = currentDate.toISOString().split('T')[0];
const oneYearFromNow = new Date(currentDate);
oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);
const oneYearFromNowStr = oneYearFromNow.toISOString().split('T')[0];

const fullPropertyPages = (await Promise.all(
  propertyPages.map(async (property) => {
    const lodgify = propertyInfo.find((p) => p.id === property.id) as unknown as LodgifyProperty;
    const availability = await fetchAvailability(property.id, currentDateStr, oneYearFromNowStr);
    const propertyRates: RatesResponse[] = [];

    for (const { roomTypeId } of availability || []) {
      if (!roomTypeId) continue;
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
)) as PropertyPage[];

export default fullPropertyPages;
