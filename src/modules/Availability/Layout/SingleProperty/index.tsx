import { useState } from 'react';
import type { Result } from '../index';
import EmptyState from '../../EmptyState';
import PeriodRow from './PeriodRow';

type Props = {
  results: Result[];
};

const INITIAL_PERIODS_SHOWN = 6;
const PERIODS_TO_ADD = 5;

const SingleProperty = ({ results }: Props) => {
  const [periodsShown, setPeriodsShown] = useState(INITIAL_PERIODS_SHOWN);

  if (results.length === 0) {
    return <EmptyState />;
  }

  // For single property, we only have one result
  const result = results[0];
  const { periods } = result;

  if (periods.length === 0) {
    return <EmptyState message="No available periods for your selected criteria." />;
  }

  const shownPeriods = periods.slice(0, periodsShown);
  const hasMorePeriods = periods.length > periodsShown;
  const remainingCount = periods.length - periodsShown;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 max-md:px-4 max-md:py-2">
        <div className="grid grid-cols-[1.5fr_1.5fr_0.8fr_1.2fr_1.5fr] gap-4 text-sm font-medium text-gray-700 max-md:hidden">
          <div className="flex items-center">Check-in</div>
          <div className="flex items-center">Check-out</div>
          <div className="flex items-center justify-center">Nights</div>
          <div className="flex items-center justify-end">Per Night</div>
          <div className="flex items-center justify-end">Total Price</div>
        </div>
      </div>

      {/* Results List */}
      <div className="border-t border-gray-200 max-md:p-0">
        {shownPeriods.map((period, index) => (
          <PeriodRow key={index} period={period} propertyId={result.property.id} />
        ))}

        {hasMorePeriods && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button
              className="w-full py-3 px-4 bg-white text-gray-700 border border-gray-300 rounded-md cursor-pointer transition-all duration-150 text-sm font-medium hover:bg-gray-50 hover:border-gray-400"
              onClick={() => setPeriodsShown((prev) => prev + PERIODS_TO_ADD)}
            >
              Show More Results ({remainingCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProperty;
