import { useState, useEffect } from 'react';
import type { LodgifyRate } from '../../content/rates/types';
import type { LodgifyAvailability } from '../../content/availability/types';
import { findAvailablePeriods, type AvailablePeriod } from './availability';
import Item from './Item';

type Props = {
  rates: LodgifyRate[];
  availability: LodgifyAvailability[];
  minStay: number;
  currencyCode: string;
  propertyId: string;
};

const AvailablePeriods = ({ rates, availability, minStay, currencyCode, propertyId }: Props) => {
  const periods = findAvailablePeriods(rates, availability);

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
