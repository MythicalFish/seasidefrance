import { useStore } from '@nanostores/react';
import clsx from 'clsx';
import DateSelector from './DateSelector';
import { ChevronLeftIcon, ChevronRightIcon } from './chevrons';
import { searchStore, setStartDate, setStayLength, setIsPickerOpen } from '@stores/searchStore';

export type StayLengthOption = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

const STAY_OPTIONS: StayLengthOption[] = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

import styles from './styles.module.css';

const SearchControls: React.FC = () => {
  const { startDate, stayLength, isPickerOpen } = useStore(searchStore);

  const selectedDay = new Date(startDate);
  const selectedYear = startDate.getFullYear();
  const selectedMonth = startDate.getMonth();

  const handleStayLengthChange = (direction: 'prev' | 'next') => {
    const currentIndex = STAY_OPTIONS.indexOf(stayLength);
    if (direction === 'prev' && currentIndex > 0) {
      setStayLength(STAY_OPTIONS[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < STAY_OPTIONS.length - 1) {
      setStayLength(STAY_OPTIONS[currentIndex + 1]);
    }
  };

  const formatStayLength = (nights: StayLengthOption) => {
    return [0, 15].includes(stayLength) ? 'Any length' : `${nights} nights`;
  };

  return (
    <>
      <div className={clsx(styles.container, 'flex items-center gap-2')}>
        {/* Stay Length Navigation */}
        <div className="flex items-center border border-gray-300 rounded-[99px] flex-auto w-full">
          <button
            type="button"
            onClick={() => handleStayLengthChange('prev')}
            disabled={STAY_OPTIONS.indexOf(stayLength) === 0}
            className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease stay length"
          >
            <ChevronLeftIcon />
          </button>

          <div className="py-3 text-slate-700 min-w-[60px] w-full flex-auto text-center">
            {formatStayLength(stayLength)}
          </div>

          <button
            type="button"
            onClick={() => handleStayLengthChange('next')}
            disabled={STAY_OPTIONS.indexOf(stayLength) === STAY_OPTIONS.length - 1}
            className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Increase stay length"
          >
            <ChevronRightIcon />
          </button>
        </div>
        <div className="text-sm font-medium text-gray-700">From</div>
        <DateSelector
          selectedDay={selectedDay.getDate()}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          startDate={startDate}
          setStartDate={setStartDate}
          isPickerOpen={isPickerOpen}
          setIsPickerOpen={setIsPickerOpen}
        />
      </div>
    </>
  );
};

export default SearchControls;
