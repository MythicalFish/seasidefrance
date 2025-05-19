import type { LodgifyRate } from '../../content/rates/types';
import type { LodgifyAvailability } from '../../content/availability/types';

export type AvailablePeriod = {
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  nights: number;
};

interface PricePerDay {
  [key: string]: number;
}

export function findAvailablePeriods(
  rates: LodgifyRate[],
  availability: LodgifyAvailability[]
): AvailablePeriod[] {
  if (!availability.length || !rates.length) return [];

  const defaultRate = rates.find(rate => rate.isDefault);
  const defaultPrice = defaultRate?.prices?.[0]?.pricePerDay;
  const defaultMinStay = defaultRate?.prices?.[0]?.minStay;

  const priceMap: PricePerDay = {};
  const minStayMap: PricePerDay = {};

  rates.forEach(rate => {
    const { date } = rate;
    if (!date) return;
    const price = rate.prices?.[0];
    const priceValue = price?.pricePerDay || defaultPrice;
    const minStay = price?.minStay || defaultMinStay;
    if (priceValue) {
      priceMap[`${date}`] = priceValue as unknown as number;
    }
    if (minStay) {
      minStayMap[`${date}`] = minStay;
    }
  });

  // Build array of available dates
  const availableDates: string[] = [];
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

    // Get minStay for the start date
    const startDate = sequence[0];
    const requiredMinStay = minStayMap[startDate] || defaultMinStay || 1;

    // If sequence is shorter than required minStay, return empty array
    if (nights < requiredMinStay) return [];

    // For sequences longer than 7 nights, split into multiple valid periods
    const validPeriods: AvailablePeriod[] = [];

    // Create the initial period that respects minStay
    const initialSequence = sequence.slice(0, Math.min(sequence.length, 8)); // Max 7 nights (8 days)

    // Calculate total price for this period
    let totalPrice = 0;
    initialSequence.forEach(date => {
      if (priceMap[date]) {
        totalPrice += priceMap[date];
      }
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
