import type { PropertyPage } from '@data/properties/types';
import getBookingPeriods from '@lib/getBookingPeriods';
import type { Result } from '@modules/Availability';

function getSpecialDeals(properties: PropertyPage[]): Result[] {
  const today = new Date();
  const in1Week = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const limit = 10;
  const results = properties.map((property) => {
    const rates = property.rates;
    const availability = property.availability || [];
    const periods = getBookingPeriods(rates, availability, 0, in1Week, limit);

    // const sortedPeriods = periods.sort((a, b) => b.discount - a.discount);
    // console.log(sortedPeriods);
    // const period = sortedPeriods[0];
    const period = periods[0];
    return { property, periods: [period] };
  });

  return results;
}

export default getSpecialDeals;
