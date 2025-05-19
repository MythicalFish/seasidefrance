import { useState, useEffect } from 'react';
import type { LodgifyRate } from '../../content/rates/types';
import type { LodgifyAvailability } from '../../content/availability/types';
import { formatDate } from '../../lib/date';
import { findAvailablePeriods } from './availability';
import { currencySymbol } from '../../lib/utils';
interface AvailablePeriodsProps {
  rates: LodgifyRate[];
  availability: LodgifyAvailability[];
  minStay: number;
  currencyCode: string;
}

interface AvailablePeriod {
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  nights: number;
}

interface PricePerDay {
  [key: string]: number;
}

export default function AvailablePeriods({
  rates,
  availability,
  minStay,
  currencyCode,
}: AvailablePeriodsProps) {
  const [availablePeriods, setAvailablePeriods] = useState<AvailablePeriod[]>([]);

  useEffect(() => {
    const periods = findAvailablePeriods(rates, availability, minStay);
    setAvailablePeriods(periods.slice(0, 4));
  }, [rates, availability, minStay]);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Next Available Periods</h3>
      <div className="grid gap-4">
        {availablePeriods.map((period, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">
                  {formatDate(period.startDate)} - {formatDate(period.endDate)}
                </div>
                <div className="text-sm text-gray-600">{period.nights} nights</div>
              </div>
              <div className="text-lg font-semibold">
                {`${currencySymbol(currencyCode)}${period.totalPrice.toFixed(2)}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
