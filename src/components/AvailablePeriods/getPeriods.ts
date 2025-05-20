import type { LodgifyAvailability } from 'src/content/availability/types';
import type { RatesResponse } from '../../content/rates/types';
import getDateInfo from './utils/getDateInfo';
import getPromoInfo from './utils/getPromotions';
import getAvailability from './utils/getAvailability';
import getBookingPeriods from './utils/getBookingPeriods';

export type AvailablePeriod = {
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  nights: number;
};

export function findAvailablePeriods(
  rateResponses: RatesResponse[],
  availabilityResponse: LodgifyAvailability[]
): AvailablePeriod[] {
  const ratesResponse = rateResponses[0];
  if (!ratesResponse?.calendarItems?.length) return [];

  const promoInfo = getPromoInfo(ratesResponse);
  const dateInfo = getDateInfo(ratesResponse);
  const availability = getAvailability(availabilityResponse);
  const bookingPeriods = getBookingPeriods(availability);

  const withPrices = bookingPeriods.map(period => {
    return period.map(date => {
      const dateStr = date.toISOString().split('T')[0];
      const info = dateInfo[dateStr];
      return {
        date,
        ...info,
      };
    });
  });

  console.log('🟢🟢🟢 withPrices', withPrices);

  return [];
}
