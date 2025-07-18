import type { PropertyPage } from '@data/properties/types';
import getBookingPeriods, { type AvailablePeriod } from '@lib/getBookingPeriods';
import type { Result } from '@modules/Availability';
import { DEFAULT_STAY_LENGTH } from '@lib/getBookingPeriods/constants';

function sortResults(results: Result[]): Result[] {
  return results.sort((a, b) => {
    const aPeriod = a.periods[0];
    const bPeriod = b.periods[0];

    const aFirstAvailableDate = aPeriod.checkInDate;
    const bFirstAvailableDate = bPeriod.checkInDate;

    return aFirstAvailableDate.localeCompare(bFirstAvailableDate);
  });
}

function getSearchResults(
  properties: PropertyPage[],
  stayLength = DEFAULT_STAY_LENGTH,
  startDate = new Date()
): Result[] {
  let limit = 1;
  if (properties.length === 1) limit = 10;
  const results = properties.map((property) => {
    const periods = getBookingPeriods(property, stayLength, startDate, limit);
    return { property, periods };
  });
  return sortResults(results);
}

export function exactMatchFound(results: Result[], startDate: Date): boolean {
  const startDateStr = startDate.toISOString().split('T')[0];
  return results.some((result) => {
    return result.periods.some((period: AvailablePeriod) => {
      return period.checkInDate === startDateStr;
    });
  });
}

export default getSearchResults;
