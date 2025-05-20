import type { LodgifyAvailability } from 'src/content/availability/types';

export type Availability = {
  nights: string[];
  checkInDate: string;
  checkOutDate: string;
};

export type Availabilities = Availability[];

const getAvailability = (availability: LodgifyAvailability[]): Availabilities => {
  let availabilities: Availabilities = [];
  const availabilityData = availability[0];

  if (!availabilityData?.periods) return [];

  availabilityData.periods.forEach((period) => {
    const nights: string[] = [];
    if (period.available === 1 && period.start && period.end) {
      const lastNight = new Date(period.end);
      const firstNight = new Date(period.start);
      firstNight.setDate(firstNight.getDate() + 1);

      const checkInDate = new Date(period.start);
      const checkOutDate = new Date(period.end);
      checkOutDate.setDate(checkOutDate.getDate() + 1);
      const checkInDateStr = checkInDate.toISOString().split('T')[0];
      const checkOutDateStr = checkOutDate.toISOString().split('T')[0];

      let night = new Date(firstNight);
      while (night <= checkOutDate) {
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
