import { useEffect, useState } from 'react';
import type { PropertyPage } from '@data/properties/types';
import SearchControls, { type StayLengthOption } from './SearchControls';
import Layout, { type Result } from './Layout';
import clsx from 'clsx';
import Box from '@components/Box';
import { DEFAULT_STAY_LENGTH } from '@lib/getBookingPeriods/constants';
import getSearchResults from '@lib/getSearchResults';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filterChanged, setFilterChanged] = useState<boolean>(false);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }
    console.log('🟢🟢🟢 filterChanged', stayLength, startDate);
    setFilterChanged(true);
  }, [stayLength, startDate]);

  useEffect(() => {
    if (!filterChanged) return;
    setFilterChanged(false);
    setIsLoading(true);
    console.log('🟢🟢🟢 get results');
    const results = getSearchResults(properties, stayLength, startDate);
    setResults(results);
    setIsLoading(false);
  }, [properties, stayLength, startDate, filterChanged]);

  return (
    <Box className={clsx(className)} id="availability">
      <h2 className="text-2xl text-blue-900 mb-4 font-semibold">Book your stay</h2>

      <SearchControls
        startDate={startDate}
        setStartDate={setStartDate}
        stayLength={stayLength}
        setStayLength={setStayLength}
      />

      <Layout results={results} isLoading={isLoading} isSingleProperty={isSingleProperty} />
    </Box>
  );
};

export default Availability;
