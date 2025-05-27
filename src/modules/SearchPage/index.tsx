import { useEffect, useState } from 'react';
import type { PropertyPage } from '@data/properties/types';
import getPeriods from '@components/DateSelector/getPeriods';
import SearchResults, { type Result, type DisplayMode } from './SearchResults';
import SearchControls, { type StayLengthOption } from './SearchControls';
import clsx from 'clsx';

type Props = {
  properties: PropertyPage[];
  className?: string;
  initialResults?: Result[]; // Add support for pre-computed results
};

const SearchPage = ({ properties, className, initialResults }: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [stayLength, setStayLength] = useState<StayLengthOption>(7);
  const [results, setResults] = useState<Result[]>(initialResults || []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [useFilters, setUseFilters] = useState<boolean>(false);

  // Function to get all periods regardless of stay length
  const getAllPeriods = (rates: any, availability: any[], startDate: Date) => {
    const allPeriods: any[] = [];
    // Get periods for all possible stay lengths (2-14 nights)
    for (let nights = 2; nights <= 14; nights++) {
      const periods = getPeriods(rates, availability, nights, startDate);
      allPeriods.push(...periods);
    }

    // Remove duplicates and sort by check-in date
    const uniquePeriods = allPeriods.filter(
      (period, index, self) =>
        index ===
        self.findIndex(
          (p) => p.checkInDate === period.checkInDate && p.checkOutDate === period.checkOutDate
        )
    );

    return uniquePeriods.sort(
      (a, b) => new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime()
    );
  };

  // Only run effects when filters are being used (client-side only)
  useEffect(() => {
    if (!useFilters) return;

    setIsLoading(true);
    const results: Result[] = properties.map((property) => {
      const rates = property.rates;
      const availability = property.availability || [];
      const periods = getPeriods(rates, availability, stayLength, startDate);
      return { property, periods };
    });
    setResults(results);
    setIsLoading(false);
  }, [properties, stayLength, startDate, useFilters]);

  // Initialize with all periods if no initial results provided
  useEffect(() => {
    if (!initialResults && !useFilters) {
      const allResults: Result[] = properties.map((property) => {
        const rates = property.rates;
        const availability = property.availability || [];
        const periods = getAllPeriods(rates, availability, startDate);
        return { property, periods };
      });
      setResults(allResults);
    }
  }, [properties, initialResults, useFilters]);

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

    // Reset to initial results or recalculate all periods
    if (initialResults) {
      setResults(initialResults);
    } else {
      const allResults: Result[] = properties.map((property) => {
        const rates = property.rates;
        const availability = property.availability || [];
        const periods = getAllPeriods(rates, availability, startDate);
        return { property, periods };
      });
      setResults(allResults);
    }
  };

  const displayMode: DisplayMode = properties.length === 1 ? 'singleProperty' : 'multiple';

  return (
    <div className={clsx(className)}>
      {/* Controls Toggle Button */}
      <div className="mb-6">
        {!showControls ? (
          <button
            onClick={handleToggleControls}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <FilterIcon className="w-4 h-4 mr-2" />
            Refine dates
          </button>
        ) : (
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={handleToggleControls}
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <ChevronUpIcon className="w-4 h-4 mr-2" />
              Hide filters
            </button>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              <XIcon className="w-4 h-4 mr-2" />
              Show all results
            </button>
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

// Server-side helper function to generate initial results
export const generateInitialResults = (properties: PropertyPage[]): Result[] => {
  const startDate = new Date();

  return properties.map((property) => {
    const rates = property.rates;
    const availability = property.availability || [];
    const allPeriods: any[] = [];

    // Get periods for all possible stay lengths (2-14 nights)
    for (let nights = 2; nights <= 14; nights++) {
      const periods = getPeriods(rates, availability, nights, startDate);
      allPeriods.push(...periods);
    }

    // Remove duplicates and sort by check-in date
    const uniquePeriods = allPeriods.filter(
      (period, index, self) =>
        index ===
        self.findIndex(
          (p) => p.checkInDate === period.checkInDate && p.checkOutDate === period.checkOutDate
        )
    );

    const periods = uniquePeriods.sort(
      (a, b) => new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime()
    );

    return { property, periods };
  });
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
