import type { RatesResponse } from '../../data/fetchRates/types';
import type { Availability } from '../../data/fetchAvailability/types';
import { findAvailablePeriods } from './getPeriods';
import Item from './Item';

type Props = {
  rates: RatesResponse;
  availability: Availability;
  currencyCode: string;
  propertyId: number;
};

const AvailablePeriods = ({ rates, availability, currencyCode, propertyId }: Props) => {
  const periods = findAvailablePeriods(rates, availability)?.slice(0, 4);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Next Available Periods</h3>
      <div className="grid gap-4">
        {periods.map((period, index) => (
          <Item key={index} period={period} currencyCode={currencyCode} propertyId={propertyId} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePeriods;
