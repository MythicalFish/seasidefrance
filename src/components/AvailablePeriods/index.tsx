import { useState } from 'react';
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
  const [desiredStay, setDesiredStay] = useState(0);
  const periods = findAvailablePeriods(rates, availability, desiredStay)?.slice(0, 4);
  console.log(rates);
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Next Available Periods</h3>
      <div>
        <select onChange={(e) => setDesiredStay(Number(e.target.value))} value={7}>
          <option value={2}>2 nights</option>
          <option value={3}>3 nights</option>
          <option value={4}>4 nights</option>
          <option value={5}>5 nights</option>
          <option value={6}>6 nights</option>
          <option value={7}>7 nights</option>
        </select>
      </div>
      <div className="grid gap-4">
        {periods.map((period, index) => (
          <Item key={index} period={period} currencyCode={currencyCode} propertyId={propertyId} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePeriods;
