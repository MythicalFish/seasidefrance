import type { Availabilities } from './getAvailability';

const getBookingPeriods = (availabilities: Availabilities): Availabilities => {
  return availabilities.map((availability) => {
    const nights = availability.nights.slice(0, 7).sort();
    const checkOutDate = nights[nights.length - 1];
    return {
      nights,
      checkInDate: availability.checkInDate,
      checkOutDate: checkOutDate,
    };
  });
};

export default getBookingPeriods;
