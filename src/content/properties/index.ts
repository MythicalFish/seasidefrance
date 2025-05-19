const apiKey = import.meta.env.LODGIFY_PUBLIC_KEY;
import { fetchAvailability } from '../availability';
import { fetchRates } from '../rates';
import lodgifyFetch from './data/lodgifyFetch';

import type { Property, Rates } from './types';

import optimizedInfo from './data/optimizedInfo.json';
const lodgifyInfo = await lodgifyFetch(apiKey || '');

const properties = (await Promise.all(
  optimizedInfo.map(async property => {
    const lodgify = lodgifyInfo.find(p => p.id === property.id);
    const availability = await fetchAvailability(property.id, '2025-05-01', '2026-01-01');
    const rates: Rates = [];
    for (const { roomTypeId } of availability || []) {
      if (!roomTypeId) continue;
      const rateData = await fetchRates(property.id, roomTypeId, '2025-05-01', '2026-01-01');
      rates.push({ roomTypeId, data: rateData });
    }
    return {
      ...property,
      lodgify,
      availability,
      rates,
    };
  })
)) as Property[];

export type { Property };

export default properties;
