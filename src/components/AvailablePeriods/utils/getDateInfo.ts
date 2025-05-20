import type { LodgifyRate } from 'src/content/rates/types';

type DateInfo = {
  [key: string]: {
    price: number;
    minStay: number;
  };
};

const getDateInfo = (rates: LodgifyRate[]): DateInfo => {
  const defaultRate = rates.find(rate => rate.isDefault);
  const defaultPrice = defaultRate?.prices?.[0]?.pricePerDay;
  const defaultMinStay = defaultRate?.prices?.[0]?.minStay || 2;

  const dateInfo: DateInfo = {};

  for (const rate of rates) {
    const { date } = rate;
    if (!date) continue;
    const price = rate.prices?.[0];
    const priceValue = price?.pricePerDay || defaultPrice;
    const minStay = price?.minStay || defaultMinStay;
    dateInfo[`${date}`] = {
      price: priceValue as unknown as number,
      minStay,
    };
  }

  return dateInfo;
};

export default getDateInfo;
