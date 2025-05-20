import type { LodgifyAvailability } from 'src/content/availability/types';
export type Availabilities = string[][];

const getAvailability = (availability: LodgifyAvailability[]): Availabilities => {
  let availableDates: Availabilities = [];
  const availabilityData = availability[0];

  if (!availabilityData?.periods) return [];

  availabilityData.periods.forEach(period => {
    const periodInfo: string[] = [];
    if (period.available === 1 && period.start && period.end) {
      const endDate = new Date(period.end);
      let currentDate = new Date(period.start);
      while (currentDate <= endDate) {
        periodInfo.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
    availableDates.push(periodInfo.sort());
  });

  const currentDate = new Date().toISOString().split('T')[0];
  availableDates = availableDates.map(arr => {
    return arr.filter(date => date >= currentDate);
  });
  availableDates = availableDates.filter(arr => !!arr.length);

  return availableDates;
};

export default getAvailability;
