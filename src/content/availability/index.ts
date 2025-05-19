import lodgifyFetchAvailability from './fetchData';
export type { LodgifyAvailability, AvailabilityResponse } from './types';

export const getAvailability = async (propertyId: number, startDate: string, endDate: string) => {
  const apiKey = process.env.LODGIFY_PUBLIC_KEY;
  return lodgifyFetchAvailability(apiKey, propertyId, startDate, endDate);
};
