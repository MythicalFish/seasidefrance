import type { AvailabilityPeriod } from '@data/fetchAvailability/types';

export type AvailabilityObj = {
  nights: string[];
  checkInDate: string;
  checkOutDate: string;
};

export const getFirstAvailableDate = (availability: AvailabilityPeriod[]): string => {
  if (!availability) return '';
  return availability.find((period) => period.available === 1)?.start || '';
};

const getAvailability = (periods: AvailabilityPeriod[]): AvailabilityObj[] => {
  if (!periods) return [];
  let availabilities: AvailabilityObj[] = [];

  periods.forEach((period) => {
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
        const dateStr = night.toISOString().split('T')[0];
        nights.push(dateStr);
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
