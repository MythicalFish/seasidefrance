import type { AvailabilityObj } from './getAvailability';

const getBookingPeriods = (availabilities: AvailabilityObj[]): AvailabilityObj[] => {
  const result: AvailabilityObj[] = [];

  availabilities.forEach((availability) => {
    if (availability.nights.length <= 7) {
      result.push(availability);
      return;
    }

    // Process the nights in chunks of 7
    for (let i = 0; i < availability.nights.length; i += 7) {
      const nightsChunk = availability.nights.slice(i, i + 7).sort();

      // Skip if less than 2 nights
      if (nightsChunk.length < 2) continue;

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
