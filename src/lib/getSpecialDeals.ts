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
    const periods = getBookingPeriods(property, 0, today, limit);

    let sortedPeriods = periods.filter((period) => period.discount > 0);
    const period = sortedPeriods[0];
    return { property, periods: [period] };
  });

  return results.sort((a, b) => {
    const aPeriod = a.periods[0];
    const bPeriod = b.periods[0];
    const aFirstAvailableDate = aPeriod?.checkInDate;
    const bFirstAvailableDate = bPeriod?.checkInDate;
    return aFirstAvailableDate?.localeCompare(bFirstAvailableDate);
  });
}

export default getSpecialDeals;
