import { useState } from 'react';
import type { Result } from '../index';
import ResultItem from '../LayoutMultiple/ResultItem';
import type { PropertyPage } from '@data/properties/types';

type Props = {
  results: Result[];
  currentProperty: PropertyPage;
};

const INITIAL_PERIODS_SHOWN = 6;
const PERIODS_TO_ADD = 5;

const SingleProperty = ({ results, currentProperty }: Props) => {
  const [periodsShown, setPeriodsShown] = useState(INITIAL_PERIODS_SHOWN);

  const result = results.find((result) => result.property.id === currentProperty.id);

  if (!result?.periods?.length) {
    return (
      <div className="text-center py-12">No available periods for your selected criteria.</div>
    );
  }

  const { periods } = result;
  const shownPeriods = periods.slice(0, 1);
  const hasMorePeriods = periods.length > periodsShown;
  const remainingCount = periods.length - periodsShown;

  const period = periods[0];

  return <ResultItem property={result.property} period={period} resultIndex={0} cta />;
};

export default SingleProperty;
