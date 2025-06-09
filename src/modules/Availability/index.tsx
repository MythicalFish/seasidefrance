import { useEffect, useState } from 'react';
import type { PropertyPage } from '@data/properties/types';
import SearchControls, { type StayLengthOption } from './SearchControls';
import LayoutMultiple from './LayoutMultiple';
import LayoutSingle from './LayoutSingle';
import clsx from 'clsx';
import Box from '@components/Box';
import { DEFAULT_STAY_LENGTH } from '@lib/getBookingPeriods/constants';
import getSearchResults, { exactMatchFound } from '@lib/getSearchResults';
import DayPicker from './SearchControls/DayPicker';
import type { AvailablePeriod } from '@lib/getBookingPeriods';

export type Result = {
  property: PropertyPage;
  periods: AvailablePeriod[];
};

// TODO: check with JS disabled, JSON size, etc.

type Props = {
  properties: PropertyPage[];
  className?: string;
  initialResults?: Result[];
};

const Availability = ({ properties, className, initialResults }: Props) => {
  const isSingleProperty = properties.length === 1;
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [stayLength, setStayLength] = useState<StayLengthOption>(DEFAULT_STAY_LENGTH);
  const [results, setResults] = useState<Result[]>(initialResults || []);
  const [filterChanged, setFilterChanged] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [exactDateSelected, setExactDateSelected] = useState(false);
  let hasExactMatch = true;

  if (exactDateSelected) {
    hasExactMatch = exactMatchFound(results, startDate);
  }

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }
    setFilterChanged(true);
  }, [stayLength, startDate]);

  useEffect(() => {
    if (!filterChanged) return;
    setFilterChanged(false);
    const results = getSearchResults(properties, stayLength, startDate);
    setResults(results);
  }, [filterChanged]);

  return (
    <Box className={clsx(className)} id="availability">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
        <h2 className="text-2xl text-blue-900 mb-4 md:mb-0 m-0 font-semibold">Book your stay</h2>
        <SearchControls
          startDate={startDate}
          setStartDate={setStartDate}
          stayLength={stayLength}
          setStayLength={setStayLength}
          isPickerOpen={isPickerOpen}
          setIsPickerOpen={setIsPickerOpen}
        />
      </div>
      {isPickerOpen && (
        <div className=" flex justify-end -mt-6 mb-8">
          <DayPicker
            startDate={startDate}
            setStartDate={setStartDate}
            isPickerOpen={isPickerOpen}
            setIsPickerOpen={setIsPickerOpen}
            setExactDateSelected={setExactDateSelected}
          />
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
      {isSingleProperty ? <LayoutSingle results={results} /> : <LayoutMultiple results={results} />}
    </Box>
  );
};

export default Availability;
