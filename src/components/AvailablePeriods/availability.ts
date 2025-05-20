import type { RatesResponse } from '../../content/rates/types';
import getDateInfo from './utils/getDateInfo';
import getPromoInfo from './utils/getPromotions';

export type AvailablePeriod = {
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  nights: number;
};

export function findAvailablePeriods(rateResponses: RatesResponse[]): AvailablePeriod[] {
  const ratesResponse = rateResponses[0];
  if (!ratesResponse?.calendarItems?.length) return [];

  const promoInfo = getPromoInfo(ratesResponse);
  const dateInfo = getDateInfo(ratesResponse);

  console.log('dateInfo', dateInfo);
  return [];

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
