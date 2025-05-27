import { useEffect, useState } from 'react';
import type { PropertyPage } from '@data/properties/types';
import getPeriods from '@components/DateSelector/getPeriods';
import SearchResults, { type Result, type DisplayMode } from './SearchResults';
import SearchControls, { type StayLengthOption } from './SearchControls';
import Button from '@components/Button';
import clsx from 'clsx';

type Props = {
  properties: PropertyPage[];
  className?: string;
  initialResults?: Result[]; // Back to optional - provides default 7-night results
};

const SearchPage = ({ properties, className, initialResults }: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [stayLength, setStayLength] = useState<StayLengthOption>(7);
  const [results, setResults] = useState<Result[]>(initialResults || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [useFilters, setUseFilters] = useState<boolean>(false);

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

  const displayMode: DisplayMode = properties.length === 1 ? 'singleProperty' : 'multiple';

  return (
    <div className={clsx(className)}>
      {/* Controls Toggle Button */}
      <div className="mb-6">
        {!showControls ? (
          <Button variant="primary" onClick={handleToggleControls} icon={<FilterIcon />}>
            Refine dates
          </Button>
        ) : (
          <div className="flex items-center gap-3 mb-4">
            <Button variant="secondary" onClick={handleToggleControls} icon={<ChevronUpIcon />}>
              Hide filters
            </Button>
            <Button variant="ghost" onClick={handleResetFilters} icon={<XIcon />}>
              Show default results
            </Button>
          </div>
        )}
      </div>

      {/* Search Controls */}
      {showControls && (
        <SearchControls
          startDate={startDate}
          setStartDate={setStartDate}
          stayLength={stayLength}
          setStayLength={setStayLength}
        />
      )}

      <SearchResults results={results} isLoading={isLoading} displayMode={displayMode} />
    </div>
  );
};

// Icon components
const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"></polygon>
  </svg>
);

const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18,15 12,9 6,15"></polyline>
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default SearchPage;
