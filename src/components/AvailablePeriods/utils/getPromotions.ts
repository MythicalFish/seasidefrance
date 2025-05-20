import type { LodgifyRate } from 'src/content/rates/types';

const getPromotions = (rates: LodgifyRate[]) => {
  // All rates have all the promotion info, we just need 1
  return rates[0]?.rateSettings?.promotions;
};

export default getPromotions;
