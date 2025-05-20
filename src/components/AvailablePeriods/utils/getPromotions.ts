import type { LodgifyPromotion } from 'src/content/availability/types';
import type { LodgifyRate, RatesResponse } from 'src/content/rates/types';

type StayDate = {
  lower?: string | undefined; // YYYY-MM-DD
  upper?: string | undefined; // YYYY-MM-DD
};

type DateRange = Date[];

type PromoInfo = {
  name: string;
  discount: number;
  dateRanges: DateRange[];
};

const getDateRange = ({ lower, upper }: StayDate): DateRange => {
  if (!lower || !upper) return [];
  const startDate = new Date(lower);
  const endDate = new Date(upper);
  const dateRange: DateRange = [];
  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    dateRange.push(new Date(date));
  }
  return dateRange;
};

const getPromoInfo = (rates: RatesResponse): PromoInfo[] => {
  // All rates have all the promotion info, we just need 1
  const allPromotions = rates.rateSettings?.promotions as LodgifyPromotion[];

  const promoInfo: PromoInfo[] = [];

  for (const promotion of allPromotions) {
    const promoInfo: PromoInfo = {
      name: promotion.name || '',
      discount: promotion.price?.percentage || 0,
      dateRanges:
        promotion.stayDates?.map(stayDate => {
          return getDateRange(stayDate);
        }) || [],
    };
  }

  return promoInfo;
};

export default getPromoInfo;
