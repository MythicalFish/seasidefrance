import type { Availability } from 'src/data/fetchAvailability/types';

export type AvailabilityObj = {
  nights: string[];
  checkInDate: string;
  checkOutDate: string;
};

const getAvailability = (availability: Availability): AvailabilityObj[] => {
  if (!availability) return [];
  let availabilities: AvailabilityObj[] = [];

  availability.forEach((period) => {
    const nights: string[] = [];
    if (period.available === 1 && period.start && period.end) {
      const firstNight = new Date(period.start);
      const lastNight = new Date(period.end);
      lastNight.setDate(lastNight.getDate() - 1);

      const checkInDate = new Date(period.start);
      const checkOutDate = new Date(period.end);
      checkOutDate.setDate(checkOutDate.getDate() + 1);
      const checkInDateStr = checkInDate.toISOString().split('T')[0];
      const checkOutDateStr = checkOutDate.toISOString().split('T')[0];

      let night = new Date(firstNight);
      while (night < checkOutDate) {
        nights.push(night.toISOString().split('T')[0]);
        night.setDate(night.getDate() + 1);
      }
      availabilities.push({
        nights,
        checkInDate: checkInDateStr,
        checkOutDate: checkOutDateStr,
      });
    }
  });

  // const currentDate = new Date().toISOString().split('T')[0];
  // availabilities = availabilities.map((arr) => {
  //   return arr.filter((date) => date >= currentDate);
  // });
  // availabilities = availabilities.filter((arr) => !!arr.length);

  return availabilities;
};

export default getAvailability;
