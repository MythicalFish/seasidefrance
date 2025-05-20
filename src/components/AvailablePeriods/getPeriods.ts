import type { LodgifyAvailability } from 'src/content/availability/types';
import type { RatesResponse } from '../../content/rates/types';
import getDateInfo from './utils/getDateInfo';
import getPromoInfo from './utils/getPromotions';
import getAvailability from './utils/getAvailability';
import getBookingPeriods from './utils/getBookingPeriods';

export type AvailablePeriod = {
  dates: string[];
  totalPrice: number;
  nights: number;
  startDate: string;
  endDate: string;
  discount: number;
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

  console.log('🟢🟢🟢 dateInfo', dateInfo);

  const withPrices = bookingPeriods.map((period) => {
    let totalPrice = 0;
    let minStay = 0;
    period.forEach((dateStr) => {
      const info = dateInfo[dateStr];
      totalPrice += info.price;
      if (info.minStay > minStay) minStay = info.minStay;
    });
    return {
      dates: period,
      totalPrice,
      minStay,
      nights: period.length,
      startDate: period[0],
      endDate: period[period.length - 1],
    };
  });

  // console.log('🉑🉑🉑 promoInfo', promoInfo);

  const withPromo = withPrices.map((period) => {
    let discount = 0;
    const { startDate, endDate, nights, dates, totalPrice: originalPrice } = period;
    for (const promo of promoInfo) {
      for (const dateRange of promo.dateRanges) {
        if (nights < promo.minStay) continue;
        if (dateRange.includes(startDate) && dateRange.includes(endDate)) {
          if (promo.discount > discount) {
            discount = promo.discount;
          }
        }
      }
    }
    const totalPrice = Math.round(originalPrice * (1 - discount / 100) * 100) / 100;
    return {
      originalPrice,
      discount,
      totalPrice,
      startDate,
      endDate,
      nights,
      dates,
    };
  });

  // console.log('🟢🟢🟢 withPromo', withPromo);

  return withPromo;
}
