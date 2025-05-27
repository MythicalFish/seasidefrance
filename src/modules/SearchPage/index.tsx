import { useEffect, useState } from 'react';
import type { PropertyPage } from '@data/properties/types';
import getPeriods from '@components/DateSelector/getPeriods';
import SearchResults, { type Result } from './SearchResults';
import SearchControls from './SearchControls';
import clsx from 'clsx';

type Props = {
  properties: PropertyPage[];
  className?: string;
};

const SearchPage = ({ properties, className }: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [stayLength, setStayLength] = useState<number>(7);
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    let results: Result[] = [];
    for (const property of properties) {
      const rates = property.rates;
      const availability = property.availability || [];
      const periods = getPeriods(rates, availability, stayLength, startDate);
      if (periods && periods.length > 0) {
        results.push({ property, periods: [periods[0]] });
      } else {
        results.push({ property, periods: [] });
      }
    }
    setResults(results);
    setIsLoading(false);
  }, [properties, stayLength, startDate]);

  let displayMode = 'multiplePeriods';
  if (properties.length === 1) {
    displayMode = 'singlePeriod';
  }

  return (
    <div className={clsx(className)}>
      <SearchControls
        startDate={startDate}
        setStartDate={setStartDate}
        stayLength={stayLength}
        setStayLength={setStayLength}
      />
      <SearchResults results={results} isLoading={isLoading} displayMode={displayMode} />
    </div>
  );
};

export default SearchPage;
