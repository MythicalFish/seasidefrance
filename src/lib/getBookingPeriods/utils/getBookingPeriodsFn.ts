import type { AvailabilityObj } from './getAvailability';
import getBookingPeriodsAny from './getBookingPeriodsAny';
import { DEFAULT_STAY_LENGTH } from '../constants';
import type { PropertyPage } from '@data/properties/types';
import getAvailability from './getAvailability';
import type { MinStayPeriod } from '../../../data/fetchRestrictions/types';

const getBookingPeriodsFn = (
  property: PropertyPage,
  stayLength = DEFAULT_STAY_LENGTH,
  limit = 10,
  startDate = new Date()
): AvailabilityObj[] => {
  let minStay = stayLength;
  const allPeriods = property.availability;
  const restrictions = property.restrictions;

  const availabilities = getAvailability(allPeriods);

  if ([0, 15].includes(stayLength)) {
    return getBookingPeriodsAny(availabilities);
  }

  const result: AvailabilityObj[] = [];
  let count = 0;
  const startDateStr = startDate.toISOString().split('T')[0];

  availabilities.forEach((availability) => {
    if (availability.checkOutDate < startDateStr) {
      return;
    }
    // Sort nights to ensure consecutive date checking
    const sortedNights = availability.nights.sort();

    // For specific night counts (1-14), generate periods with exactly that many consecutive nights
    for (let startIndex = 0; startIndex < sortedNights.length; startIndex++) {
      const checkInDate = sortedNights[startIndex];
      if (checkInDate < startDateStr) continue;

      const restriction = getApplicableRestriction(checkInDate, restrictions || []);

      let effectiveStayLength = stayLength;
      if (restriction && restriction.minStay > 1) {
        effectiveStayLength = restriction.minStay;
      }

      if (startIndex + effectiveStayLength > sortedNights.length) {
        continue;
      }

      const nightsChunk = sortedNights.slice(startIndex, startIndex + effectiveStayLength);

      // Check if nights are consecutive
      if (areConsecutiveNights(nightsChunk)) {
        const lastNightDate = new Date(nightsChunk[nightsChunk.length - 1]);
        lastNightDate.setDate(lastNightDate.getDate() + 1);
        const checkOutDate = lastNightDate.toISOString().split('T')[0];

        result.push({
          nights: nightsChunk,
          checkInDate,
          checkOutDate,
        });
        count++;
        // To avoid creating overlapping periods, advance the start index
        startIndex += effectiveStayLength - 1;

        if (limit > 0 && count >= limit) break;
      }
    }
  });

  return result;
};

const getApplicableRestriction = (
  checkInDate: string,
  restrictions: MinStayPeriod[]
): MinStayPeriod | null => {
  if (!restrictions || restrictions.length === 0) {
    return null;
  }
  for (const restriction of restrictions) {
    if (checkInDate >= restriction.from && checkInDate <= restriction.to) {
      return restriction;
    }
  }
  return null;
};

// Helper function to check if nights are consecutive
const areConsecutiveNights = (nights: string[]): boolean => {
  if (nights.length <= 1) return true;

  for (let i = 1; i < nights.length; i++) {
    const prevDate = new Date(nights[i - 1]);
    const currentDate = new Date(nights[i]);
    const expectedDate = new Date(prevDate);
    expectedDate.setDate(expectedDate.getDate() + 1);

    if (currentDate.getTime() !== expectedDate.getTime()) {
      return false;
    }
  }

  return true;
};

export default getBookingPeriodsFn;
