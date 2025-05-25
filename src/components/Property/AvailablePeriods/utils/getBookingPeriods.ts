import type { AvailabilityObj } from './getAvailability';

const getBookingPeriods = (
  availabilities: AvailabilityObj[],
  desiredStay: number
): AvailabilityObj[] => {
  let strict = false;
  let maxNights = 7;
  if (desiredStay > 0) {
    strict = true;
    maxNights = desiredStay;
  }

  const result: AvailabilityObj[] = [];

  availabilities.forEach((availability) => {
    if (availability.nights.length <= 7) {
      result.push(availability);
      return;
    }

    // Process the nights in chunks of 7
    for (let i = 0; i < availability.nights.length; i += maxNights) {
      const nightsChunk = availability.nights.slice(i, i + maxNights).sort();

      // Skip if less than 2 nights
      if (nightsChunk.length < 2) continue;

      if (strict && nightsChunk.length !== maxNights) continue;

      const checkInDate = nightsChunk[0];
      const checkOutDateIndex = nightsChunk.length;
      const checkOutDate =
        availability.nights[i + checkOutDateIndex] || nightsChunk[nightsChunk.length - 1];

      result.push({
        nights: nightsChunk,
        checkInDate,
        checkOutDate,
      });
    }
  });

  return result;
};

export default getBookingPeriods;
