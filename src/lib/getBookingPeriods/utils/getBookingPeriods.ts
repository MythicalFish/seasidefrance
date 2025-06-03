import type { AvailabilityObj } from './getAvailability';
import getBookingPeriodsAny from './getBookingPeriodsAny';
import { DEFAULT_STAY_LENGTH } from '../constants';

const getBookingPeriods = (
  availabilities: AvailabilityObj[],
  stayLength = DEFAULT_STAY_LENGTH,
  limit = 1
): AvailabilityObj[] => {
  if ([0, 15].includes(stayLength)) {
    return getBookingPeriodsAny(availabilities);
  }

  const result: AvailabilityObj[] = [];
  let count = 0;

  availabilities.forEach((availability) => {
    // Sort nights to ensure consecutive date checking
    const sortedNights = availability.nights.sort();

    // For specific night counts (1-14), generate periods with exactly that many consecutive nights
    for (let startIndex = 0; startIndex <= sortedNights.length - stayLength; startIndex++) {
      const nightsChunk = sortedNights.slice(startIndex, startIndex + stayLength);

      // Check if nights are consecutive
      if (areConsecutiveNights(nightsChunk)) {
        const checkInDate = nightsChunk[0];
        const lastNightDate = new Date(nightsChunk[nightsChunk.length - 1]);
        lastNightDate.setDate(lastNightDate.getDate() + 1);
        const checkOutDate = lastNightDate.toISOString().split('T')[0];

        result.push({
          nights: nightsChunk,
          checkInDate,
          checkOutDate,
        });
        count++;
        if (limit > 0 && count >= limit) return;
      }
    }
  });

  return result;
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

export default (availabilities: AvailabilityObj[], stayLength: number): AvailabilityObj[] => {
  return getBookingPeriods(availabilities, stayLength);
};
