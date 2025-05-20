import type { LodgifyRate } from '../../content/rates/types';
import type { LodgifyAvailability } from '../../content/availability/types';
import getDateInfo from './utils/getDateInfo';
import getPromotions from './utils/getPromotions';

export type AvailablePeriod = {
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  nights: number;
};

export function findAvailablePeriods(
  rates: LodgifyRate[],
  availability: LodgifyAvailability[]
): AvailablePeriod[] {
  if (!availability.length || !rates.length) return [];
  console.log('');
  console.log('🟢🟢🟢🟢');
  console.log('');
  console.log('rate', rates[0]);
  console.log('stayDates', rates[0]?.rateSettings);
  console.log('');
  console.log('rate', rates[1]);
  console.log('stayDates', rates[1]?.rateSettings);

  const promotions = getPromotions(rates);

  // for (const rate of rates) {
  //   console.log('');
  //   for (const promotion of rate?.rateSettings?.promotions) {
  //     console.log('promotion.stayDates', promotion?.stayDates.length);
  //   }
  // }

  const dateInfo = getDateInfo(rates);

  // Build array of available dates
  let availableDates: string[] = [];
  const availabilityData = availability[0];

  if (!availabilityData?.periods) return [];

  availabilityData.periods.forEach(period => {
    if (period.available === 1 && period.start && period.end) {
      const start = new Date(period.start);
      const end = new Date(period.end);
      let currentDate = new Date(start);

      while (currentDate <= end) {
        availableDates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
  });

  // Sort available dates
  availableDates.sort();
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  const currentDateIndex = availableDates.findIndex(date => date === currentDateString);
  availableDates = availableDates.slice(currentDateIndex);

  // Group dates into consecutive sequences
  const sequences: string[][] = [];
  let currentSequence: string[] = [];

  availableDates.forEach((date, index) => {
    if (index === 0) {
      // Start first sequence
      currentSequence.push(date);
    } else {
      // Check if date is consecutive with previous date
      const prevDate = new Date(availableDates[index - 1]);
      prevDate.setDate(prevDate.getDate() + 1);

      if (prevDate.toISOString().split('T')[0] === date) {
        // Consecutive date, add to current sequence if we haven't reached max length
        if (currentSequence.length < 7) {
          currentSequence.push(date);
        } else {
          // Already at max length, start a new sequence
          sequences.push([...currentSequence]);
          currentSequence = [date];
        }
      } else {
        // Not consecutive, start new sequence
        if (currentSequence.length > 0) {
          sequences.push([...currentSequence]);
        }
        currentSequence = [date];
      }
    }
  });

  // Add the last sequence if it's not empty
  if (currentSequence.length > 0) {
    sequences.push(currentSequence);
  }

  // Filter and process sequences based on minStay
  return sequences.flatMap(sequence => {
    const nights = sequence.length - 1;
    if (nights === 0) return []; // Skip single day sequences

    const startDate = sequence[0];
    const minStay = dateInfo[startDate].minStay;
    if (nights < minStay) return [];

    const validPeriods: AvailablePeriod[] = [];
    const initialSequence = sequence.slice(0, Math.min(sequence.length, 8)); // Max 7 nights (8 days)

    // Calculate total price for this period
    let totalPrice = 0;
    initialSequence.forEach(date => {
      const price = dateInfo[date].price;
      totalPrice += price;
    });

    validPeriods.push({
      startDate: new Date(initialSequence[0]),
      endDate: new Date(initialSequence[initialSequence.length - 1]),
      totalPrice,
      nights: initialSequence.length - 1,
    });

    return validPeriods;
  });
}
