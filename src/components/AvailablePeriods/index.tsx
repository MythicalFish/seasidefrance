import type { RatesResponse } from '../../content/rates/types';
import type { LodgifyAvailability } from '../../content/availability/types';
import { findAvailablePeriods, type AvailablePeriod } from './availability';
import Item from './Item';

type Props = {
  rates: RatesResponse[];
  availability: LodgifyAvailability[];
  currencyCode: string;
  propertyId: number;
};

const AvailablePeriods = ({ rates, availability, currencyCode, propertyId }: Props) => {
  const periods = findAvailablePeriods(rates);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Next Available Periods</h3>
      <div className="grid gap-4">
        {periods.slice(0, 4).map((period, index) => (
          <Item key={index} period={period} currencyCode={currencyCode} propertyId={propertyId} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePeriods;
