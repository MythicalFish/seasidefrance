import { useEffect, useState } from 'react';
import type { PropertyPage } from '@data/properties/types';
import getPeriods from '@components/DateSelector/getPeriods';
import SearchResults, { type Result, type DisplayMode } from './SearchResults';
import SearchControls, { type StayLengthOption } from './SearchControls';
import clsx from 'clsx';

type Props = {
  properties: PropertyPage[];
  className?: string;
};

const SearchPage = ({ properties, className }: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [stayLength, setStayLength] = useState<StayLengthOption>(7);
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const results: Result[] = properties.map((property) => {
      const rates = property.rates;
      const availability = property.availability || [];
      const periods = getPeriods(rates, availability, stayLength, startDate);
      return { property, periods };
    });
    setResults(results);
    setIsLoading(false);
  }, [properties, stayLength, startDate]);

  const displayMode: DisplayMode = properties.length === 1 ? 'singleProperty' : 'multiple';

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
