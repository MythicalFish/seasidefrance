import type { Promotion } from '@data/fetchAvailability/types';
import type { LodgifyRate, RatesResponse } from '@data/fetchRates/types';

type StayDate = {
  lower?: string | undefined; // YYYY-MM-DD
  upper?: string | undefined; // YYYY-MM-DD
};

export type PromoInfo = {
  name: string;
  discount: number;
  dateRanges: string[][];
  minStay: number;
  bookingDates: string[][];
};

const getDateRange = ({ lower, upper }: StayDate): string[] => {
  if (!lower || !upper) return [];
  const startDate = new Date(lower);
  const endDate = new Date(upper);
  const dateRange: string[] = [];
  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    dateRange.push(date.toISOString().split('T')[0]);
  }
  return dateRange;
};

const getPromoInfo = (rates: RatesResponse): PromoInfo[] => {
  const allPromotions = rates.rateSettings?.promotions as Promotion[];
  const promoInfo: PromoInfo[] = [];

  for (const promotion of allPromotions) {
    const promo: PromoInfo = {
      name: promotion.name || '',
      discount: promotion.price?.percentage || 0,
      minStay: promotion.minimumStayDays || 0,
      dateRanges:
        promotion.stayDates?.map((stayDate) => {
          return getDateRange(stayDate);
        }) || [],
      bookingDates:
        promotion.bookingDates?.map((bookingDate) => {
          return getDateRange(bookingDate);
        }) || [],
    };
    promoInfo.push(promo);
  }

  return promoInfo;
};

export default getPromoInfo;
