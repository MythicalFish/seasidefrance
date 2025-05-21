import type { AvailabilityObj } from './getAvailability';

const getBookingPeriods = (availabilities: AvailabilityObj[]): AvailabilityObj[] => {
  return availabilities.map((availability) => {
    if (availability.nights.length <= 7) return availability;
    const nights = availability.nights.slice(0, 7).sort();
    const checkOutDate = availability.nights[nights.length];
    return {
      nights,
      checkInDate: availability.checkInDate,
      checkOutDate: checkOutDate,
    };
  });
};

export default getBookingPeriods;
