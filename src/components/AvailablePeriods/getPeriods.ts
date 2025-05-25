import type { Availability } from 'src/data/fetchAvailability/types';
import type { RatesResponse } from '../../data/fetchRates/types';
import getDateInfo from './utils/getDateInfo';
import getPromoInfo from './utils/getPromotions';
import getAvailability from './utils/getAvailability';
import getBookingPeriods from './utils/getBookingPeriods';
import isPromoActive from './utils/isPromoActive';

export type AvailablePeriod = {
  nights: string[];
  totalPrice: number;
  nightLength: number;
  checkInDate: string;
  checkOutDate: string;
  discount: number;
  promoName: string;
  prices: number[];
  pricePerNight: number;
};

export function findAvailablePeriods(
  ratesResponse: RatesResponse,
  availabilities: Availability,
  desiredStay = 0
): AvailablePeriod[] {
  if (!ratesResponse?.calendarItems?.length) return [];

  const promoInfo = getPromoInfo(ratesResponse);
  const dateInfo = getDateInfo(ratesResponse);
  const availability = getAvailability(availabilities);
  const bookingPeriods = getBookingPeriods(availability, desiredStay);

  // promoInfo.forEach((p) => {
  //   console.log(p.name, p.bookingDates);
  // });
  // console.log('🟢🟢🟢 dateInfo', dateInfo);
  // console.log('availabilities', availabilities);
  // console.log('🟢🟢🟢 bookingPeriods', bookingPeriods);
  // console.log('🟢🟢🟢 availability', availability);

  const withPrices = bookingPeriods.map((period) => {
    let totalPrice = 0;
    let minStay = 0;
    const prices: number[] = [];
    period.nights.forEach((dateStr) => {
      const info = dateInfo[dateStr];
      if (!info) return;
      totalPrice += info.price;
      if (info.minStay > minStay) minStay = info.minStay;
      prices.push(info.price);
    });
    return {
      nights: period.nights,
      totalPrice,
      minStay,
      nightLength: period.nights.length,
      checkInDate: period.checkInDate,
      checkOutDate: period.checkOutDate,
      prices,
    };
  });

  // console.log('🉑🉑🉑 promoInfo', promoInfo);

  const withPromo = withPrices.map((period) => {
    let discount = 0;
    let promoName = '';
    const { checkInDate, checkOutDate, nightLength, totalPrice: originalPrice } = period;
    for (const promo of promoInfo) {
      if (!isPromoActive(promo)) continue;
      if (nightLength < promo.minStay) continue;
      for (const dateRange of promo.dateRanges) {
        if (dateRange.includes(checkInDate) && dateRange.includes(checkOutDate)) {
          if (promo.discount > discount) {
            discount = promo.discount;
            promoName = promo.name;
          }
        }
      }
    }
    const totalPrice = Math.round(originalPrice * (1 - discount / 100) * 100) / 100;
    const periodData = {
      originalPrice,
      discount,
      totalPrice,
      promoName,
      checkInDate,
      checkOutDate,
      nightLength,
      nights: period.nights,
      prices: period.prices,
      pricePerNight: totalPrice / nightLength,
    };
    return periodData;
  });

  const afterToday = withPromo.filter((period) => {
    return new Date(period.checkInDate) > new Date();
  });

  // console.log('🟢🟢🟢 withPromo', withPromo);

  return afterToday;
}
