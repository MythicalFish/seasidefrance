import { useState } from 'react';

export type StayLengthOption = 2 | 3 | 4 | 5 | 6 | 7 | 8;

type Props = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  stayLength: StayLengthOption;
  setStayLength: (length: StayLengthOption) => void;
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const STAY_OPTIONS: StayLengthOption[] = [2, 3, 4, 5, 6, 7, 8];

const SearchControls: React.FC<Props> = ({
  startDate,
  setStartDate,
  stayLength,
  setStayLength,
}) => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const selectedYear = startDate.getFullYear();
  const selectedMonth = startDate.getMonth();

  const handleYearToggle = () => {
    const newYear = selectedYear === currentYear ? nextYear : currentYear;
    const newDate = new Date(newYear, selectedMonth, 1);
    setStartDate(newDate);
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    const newDate = new Date(startDate);
    if (direction === 'prev') {
      newDate.setMonth(selectedMonth - 1);
    } else {
      newDate.setMonth(selectedMonth + 1);
    }

    // Handle year rollover
    if (newDate.getMonth() === 11 && direction === 'next' && selectedMonth === 11) {
      newDate.setFullYear(selectedYear + 1);
    } else if (newDate.getMonth() === 0 && direction === 'prev' && selectedMonth === 0) {
      newDate.setFullYear(selectedYear - 1);
    }

    // Don't allow past months
    const now = new Date();
    if (newDate < new Date(now.getFullYear(), now.getMonth(), 1)) {
      return;
    }

    setStartDate(newDate);
  };

  const handleStayLengthChange = (direction: 'prev' | 'next') => {
    const currentIndex = STAY_OPTIONS.indexOf(stayLength);
    if (direction === 'prev' && currentIndex > 0) {
      setStayLength(STAY_OPTIONS[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < STAY_OPTIONS.length - 1) {
      setStayLength(STAY_OPTIONS[currentIndex + 1]);
    }
  };

  const isPrevMonthDisabled = () => {
    const prevMonth = new Date(selectedYear, selectedMonth - 1, 1);
    const now = new Date();
    return prevMonth < new Date(now.getFullYear(), now.getMonth(), 1);
  };

  const formatStayLength = (nights: StayLengthOption) => {
    return nights === 8 ? '8+ nights' : `${nights} nights`;
  };

  return (
    <div className="mb-8">
      {/* Desktop Layout - Single Row */}
      <div className="hidden md:flex items-center gap-6">
        {/* From Label */}
        <div className="text-sm font-medium text-gray-700">From</div>

        {/* Year Toggle */}
        <button
          type="button"
          onClick={handleYearToggle}
          className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center font-medium text-gray-900 hover:bg-gray-100 transition-colors min-w-[80px]"
        >
          {selectedYear}
        </button>

        {/* Month Navigation */}
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            type="button"
            onClick={() => handleMonthChange('prev')}
            disabled={isPrevMonthDisabled()}
            className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeftIcon />
          </button>

          <div className="px-4 py-3 font-medium text-gray-900 min-w-[120px] text-center">
            {MONTHS[selectedMonth]}
          </div>

          <button
            type="button"
            onClick={() => handleMonthChange('next')}
            className="p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next month"
          >
            <ChevronRightIcon />
          </button>
        </div>

        {/* For Label */}
        <div className="text-sm font-medium text-gray-700">For</div>

        {/* Stay Length Navigation */}
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            type="button"
            onClick={() => handleStayLengthChange('prev')}
            disabled={STAY_OPTIONS.indexOf(stayLength) === 0}
            className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease stay length"
          >
            <ChevronLeftIcon />
          </button>

          <div className="px-4 py-3 font-medium text-gray-900 min-w-[100px] text-center">
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
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="md:hidden space-y-6">
        {/* From Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">From</label>
          <div className="space-y-4">
            {/* Year Toggle */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleYearToggle}
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-center font-medium text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {selectedYear}
              </button>
            </div>

            {/* Month Navigation */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                type="button"
                onClick={() => handleMonthChange('prev')}
                disabled={isPrevMonthDisabled()}
                className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeftIcon />
              </button>

              <div className="flex-1 text-center py-3 font-medium text-gray-900">
                {MONTHS[selectedMonth]}
              </div>

              <button
                type="button"
                onClick={() => handleMonthChange('next')}
                className="p-3 hover:bg-gray-50 transition-colors"
                aria-label="Next month"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* For Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">For</label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              type="button"
              onClick={() => handleStayLengthChange('prev')}
              disabled={STAY_OPTIONS.indexOf(stayLength) === 0}
              className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease stay length"
            >
              <ChevronLeftIcon />
            </button>

            <div className="flex-1 text-center py-3 font-medium text-gray-900">
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
        </div>
      </div>
    </div>
  );
};

// Icon components
const ChevronLeftIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRightIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

export default SearchControls;
