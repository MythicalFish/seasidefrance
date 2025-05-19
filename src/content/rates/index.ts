import lodgifyFetchRates from './fetchData';
export type { LodgifyRate, RatesResponse } from './types';

export const getRates = async (
  propertyId: number,
  roomTypeId: number,
  startDate: string,
  endDate: string
) => {
  const apiKey = process.env.LODGIFY_PUBLIC_KEY;
  return lodgifyFetchRates(apiKey, propertyId, roomTypeId, startDate, endDate);
};
