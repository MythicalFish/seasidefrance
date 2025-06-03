import type { AvailabilityObj } from './getAvailability';
import getBookingPeriodsAny from './getBookingPeriodsAny';

const getBookingPeriods = (
  availabilities: AvailabilityObj[],
  desiredStay = 7
): AvailabilityObj[] => {
  const result: AvailabilityObj[] = [];

  availabilities.forEach((availability) => {
    // Sort nights to ensure consecutive date checking
    const sortedNights = availability.nights.sort();

    if (desiredStay === 8) {
      // For 8+ nights, generate periods of 8 or more consecutive nights
      for (let nightCount = 8; nightCount <= sortedNights.length; nightCount++) {
        for (let startIndex = 0; startIndex <= sortedNights.length - nightCount; startIndex++) {
          const nightsChunk = sortedNights.slice(startIndex, startIndex + nightCount);

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
          }
        }
      }
    } else {
      // For specific night counts (2-7), generate periods with exactly that many consecutive nights
      for (let startIndex = 0; startIndex <= sortedNights.length - desiredStay; startIndex++) {
        const nightsChunk = sortedNights.slice(startIndex, startIndex + desiredStay);

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
        }
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

export default (availabilities: AvailabilityObj[], desiredStay?: number): AvailabilityObj[] => {
  if (!desiredStay) {
    return getBookingPeriodsAny(availabilities);
  }
  return getBookingPeriods(availabilities, desiredStay);
};
