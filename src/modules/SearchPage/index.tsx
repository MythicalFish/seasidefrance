import { useEffect, useState } from 'react';
import type { PropertyPage } from '@data/properties/types';
import getPeriods from '@components/DateSelector/getPeriods';
import SearchControls, { type StayLengthOption } from './SearchControls';
import Layout, { type Result, type DisplayMode } from './Layout';
import ControlsToggle from './shared/ControlsToggle';
import clsx from 'clsx';

type Props = {
  properties: PropertyPage[];
  className?: string;
  initialResults?: Result[]; // Back to optional - provides default 7-night results
};

const SearchPage = ({ properties, className, initialResults }: Props) => {
  const isSingleProperty = properties.length === 1;
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [stayLength, setStayLength] = useState<StayLengthOption>(7);
  const [results, setResults] = useState<Result[]>(initialResults || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(!isSingleProperty);
  const [useFilters, setUseFilters] = useState<boolean>(!isSingleProperty);

  // Generate initial results if not provided (fallback for client-side)
  useEffect(() => {
    if (!initialResults && !useFilters) {
      setIsLoading(true);
      const defaultResults: Result[] = properties.map((property) => {
        const rates = property.rates;
        const availability = property.availability || [];
        const periods = getPeriods(rates, availability, 0, startDate); // Get all natural periods
        return { property, periods };
      });
      setResults(defaultResults);
      setIsLoading(false);
    }
  }, [properties, initialResults, useFilters, startDate]);

  // Only run client-side filtering when filters are explicitly enabled
  useEffect(() => {
    if (!useFilters) return;

    setIsLoading(true);
    const filteredResults: Result[] = properties.map((property) => {
      const rates = property.rates;
      const availability = property.availability || [];
      const periods = getPeriods(rates, availability, stayLength, startDate);
      return { property, periods };
    });
    setResults(filteredResults);
    setIsLoading(false);
  }, [properties, stayLength, startDate, useFilters]);

  const handleToggleControls = () => {
    setShowControls(!showControls);
    if (!showControls) {
      // When showing controls, enable filters
      setUseFilters(true);
    }
  };

  const handleResetFilters = () => {
    setUseFilters(false);
    setShowControls(false);
    // Reset to initial build-time results or generate default 7-night results
    if (initialResults) {
      setResults(initialResults);
    } else {
      const defaultResults: Result[] = properties.map((property) => {
        const rates = property.rates;
        const availability = property.availability || [];
        const periods = getPeriods(rates, availability, 0, startDate); // Get all natural periods
        return { property, periods };
      });
      setResults(defaultResults);
    }
  };

  return (
    <div className={clsx(className)}>
      {isSingleProperty && (
        <ControlsToggle
          showControls={showControls}
          onToggleControls={handleToggleControls}
          onResetFilters={handleResetFilters}
        />
      )}

      {/* Search Controls */}
      {showControls && (
        <SearchControls
          startDate={startDate}
          setStartDate={setStartDate}
          stayLength={stayLength}
          setStayLength={setStayLength}
        />
      )}

      <Layout results={results} isLoading={isLoading} isSingleProperty={isSingleProperty} />
    </div>
  );
};

export default SearchPage;
