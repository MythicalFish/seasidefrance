import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import type { PropertyPage } from '@data/properties/types';
import SearchControls, { type StayLengthOption } from '@components/SearchControls';
import LayoutMultiple from './LayoutMultiple';
import LayoutSingle from './LayoutSingle';
import clsx from 'clsx';
import Box from '@components/Box';
import { DEFAULT_STAY_LENGTH } from '@lib/getBookingPeriods/constants';
import getSearchResults, { exactMatchFound } from '@lib/getSearchResults';
import DayPicker from '@components/SearchControls/DayPicker';
import type { AvailablePeriod } from '@lib/getBookingPeriods';
import { searchStore, updateSearchState } from '@stores/searchStore';

export type Result = {
  property: PropertyPage;
  periods: AvailablePeriod[];
};

// TODO: check with JS disabled, JSON size, etc.

type Props = {
  properties: PropertyPage[];
  className?: string;
  initialResults?: Result[];
  currentProperty?: PropertyPage;
};

const parseQueryParams = () => {
  if (typeof window === 'undefined') {
    return { startDate: new Date(), stayLength: DEFAULT_STAY_LENGTH as StayLengthOption };
  }

  const params = new URLSearchParams(window.location.search);
  const dateParam = params.get('date');
  const stayLengthParam = params.get('stayLength');

  let startDate = new Date();
  if (dateParam) {
    const parsedDate = new Date(dateParam);
    if (!isNaN(parsedDate.getTime())) {
      startDate = parsedDate;
    }
  }

  let stayLength: StayLengthOption = DEFAULT_STAY_LENGTH as StayLengthOption;
  if (stayLengthParam) {
    const parsedLength = parseInt(stayLengthParam, 10);
    const validLengths: StayLengthOption[] = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    if (!isNaN(parsedLength) && validLengths.includes(parsedLength as StayLengthOption)) {
      stayLength = parsedLength as StayLengthOption;
    }
  }

  return { startDate, stayLength };
};

const Availability = ({ properties, className, initialResults, currentProperty }: Props) => {
  const { startDate, stayLength, isPickerOpen, exactDateSelected } = useStore(searchStore);
  const [results, setResults] = useState<Result[]>(initialResults || []);
  const [filterChanged, setFilterChanged] = useState(false);
  const [initialized, setInitialized] = useState(false);
  let hasExactMatch = true;

  if (exactDateSelected) {
    hasExactMatch = exactMatchFound(results, startDate);
  }

  // Initialize from query params after hydration
  useEffect(() => {
    const { startDate: queryStartDate, stayLength: queryStayLength } = parseQueryParams();
    updateSearchState({
      startDate: queryStartDate,
      stayLength: queryStayLength,
    });
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) {
      return;
    }
    setFilterChanged(true);
  }, [stayLength, startDate, initialized]);

  useEffect(() => {
    if (!filterChanged) return;
    setFilterChanged(false);
    const results = getSearchResults(properties, stayLength, startDate);
    setResults(results);
  }, [filterChanged]);

  useEffect(() => {
    const handleUrlChange = () => {
      const { startDate: newStartDate, stayLength: newStayLength } = parseQueryParams();
      updateSearchState({
        startDate: newStartDate,
        stayLength: newStayLength,
      });
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  let title = 'Book your stay';
  if (currentProperty) {
    title = `Book your stay here`;
  }

  return (
    <Box className={clsx(className)}>
      <div className="relative">
        <div
          id="availability"
          style={{ top: '-98px', position: 'absolute', visibility: 'hidden', height: '1px' }}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
        <h2 className="text-2xl text-[#003950] mb-4 md:mb-0 m-0 font-semibold">{title}</h2>
        <SearchControls />
      </div>
      {isPickerOpen && (
        <div className=" flex justify-end -mt-6 mb-8">
          <DayPicker />
        </div>
      )}
      {!hasExactMatch && (
        <div className="text-center mb-12 pt-4 text-slate-500">
          <p>
            <i
              className="codicon codicon-info mr-2 relative"
              style={{ fontSize: '1.25rem', bottom: '-4px' }}
            />
            No availability for this specific date,
            <br />
            showing next available options.
          </p>
        </div>
      )}
      {currentProperty && (
        <>
          <LayoutSingle results={results} currentProperty={currentProperty} />
          {results.length > 1 && (
            <h2 className="text-2xl text-[#003950] mb-4 mt-12 font-semibold">Other properties</h2>
          )}
        </>
      )}
      <LayoutMultiple results={results} currentProperty={currentProperty} />
    </Box>
  );
};

export default Availability;
