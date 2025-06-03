import type { AvailabilityPeriod } from '@data/fetchAvailability/types';
import type { AvailablePeriod } from '@lib/getBookingPeriods';
import type { Result } from '@modules/Availability/Layout';

export const getFirstAvailableDate = (availability: AvailabilityPeriod[]): string => {
  if (!availability) return '';
  return availability.find((period) => period.available === 1)?.start || '';
};

export function sortResults(results: Result[]): Result[] {
  return results.sort((a, b) => {
    const aPeriod = a.periods[0];
    const bPeriod = b.periods[0];

    const aFirstAvailableDate = aPeriod.checkInDate;
    const bFirstAvailableDate = bPeriod.checkInDate;
    console.log(aFirstAvailableDate, bFirstAvailableDate);

    return aFirstAvailableDate.localeCompare(bFirstAvailableDate);
  });
}
