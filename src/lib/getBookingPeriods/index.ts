import type { PropertyPage } from '@data/properties/types';
import getDateInfo from './utils/getDateInfo';
import getPromoInfo from './utils/getPromotions';
import getBookingPeriodsFn from './utils/getBookingPeriodsFn';
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

function getBookingPeriodsWithPrices(
  property: PropertyPage,
  stayLength = 0,
  startDate = new Date(),
  limit = 10
): AvailablePeriod[] {
  const ratesResponse = property.rates;
  if (!ratesResponse?.calendarItems?.length) return [];

  const promoInfo = getPromoInfo(ratesResponse);
  const dateInfo = getDateInfo(ratesResponse);
  const bookingPeriods = getBookingPeriodsFn(property, stayLength, limit, startDate);
  // console.log('🟢🟢🟢 availableDates', availableDates);

  // Filter booking periods based on startDate
  const startDateStr = startDate.toISOString().split('T')[0];
  let filteredPeriods = bookingPeriods.filter((period) => {
    // Check if the period starts on or after the startDate
    return period?.checkInDate >= startDateStr;
  });

  // If no periods start on or after startDate, try to find periods that include the startDate
  if (filteredPeriods.length === 0) {
    filteredPeriods = bookingPeriods.filter((period) => {
      // Check if startDate falls within the period's nights
      return period.nights.includes(startDateStr);
    });
  }

  // If still no periods found, return all available periods
  if (filteredPeriods.length === 0) {
    filteredPeriods = bookingPeriods;
  }

  // console.log(
  //   '🟢🟢🟢 ratesResponse',
  //   ratesResponse.calendarItems.map((item) => item.prices)
  // );

  // promoInfo.forEach((p) => {
  //   console.log(p.name, p.bookingDates);
  // });
  // console.log('🟢🟢🟢 dateInfo', dateInfo);
  // console.log('availableDates', availableDates);
  // console.log('bookingPeriods', bookingPeriods);
  // console.log('startDateStr', startDateStr);
  // console.log('filteredPeriods', filteredPeriods);
  // console.log('🟢🟢🟢 availability', availability);

  const withPrices = filteredPeriods.map((period) => {
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
      checkInDate: period?.checkInDate,
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

  return withPromo;
}

export default getBookingPeriodsWithPrices;
