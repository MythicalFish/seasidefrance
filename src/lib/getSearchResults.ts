import type { PropertyPage } from '@data/properties/types';
import getBookingPeriods from '@lib/getBookingPeriods';
import type { Result } from '@modules/Availability/Layout';
import { sortResults } from '@lib/getBookingPeriods/utils/sortResults';
import { DEFAULT_STAY_LENGTH } from '@lib/getBookingPeriods/constants';

const getSearchResults = (
  properties: PropertyPage[],
  stayLength = DEFAULT_STAY_LENGTH,
  startDate = new Date()
): Result[] => {
  const results = properties.map((property) => {
    const rates = property.rates;
    const availability = property.availability || [];
    const periods = getBookingPeriods(rates, availability, stayLength, startDate);
    return { property, periods };
  });

  return sortResults(results);
};

export default getSearchResults;
