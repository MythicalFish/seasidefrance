import type { AvailabilityObj } from './getAvailability';

const getBookingPeriods = (
  availabilities: AvailabilityObj[],
  desiredStay = 7
): AvailabilityObj[] => {
  // Use desiredStay as the maximum number of nights per booking period
  const maxNights = desiredStay > 0 ? desiredStay : 7;

  const result: AvailabilityObj[] = [];

  availabilities.forEach((availability) => {
    if (availability.nights.length <= maxNights) {
      result.push(availability);
      return;
    }

    // Process the nights in chunks of maxNights
    for (let i = 0; i < availability.nights.length; i += maxNights) {
      const nightsChunk = availability.nights.slice(i, i + maxNights).sort();

      // Skip if less than 2 nights
      if (nightsChunk.length < 2) continue;

      const checkInDate = nightsChunk[0];
      // Calculate check-out date as the day after the last night
      const lastNightDate = new Date(nightsChunk[nightsChunk.length - 1]);
      lastNightDate.setDate(lastNightDate.getDate() + 1);
      const checkOutDate = lastNightDate.toISOString().split('T')[0];

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
