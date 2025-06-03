import { ChevronLeftIcon, ChevronRightIcon } from './chevrons';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type Props = {
  selectedMonth: number;
  selectedYear: number;
  startDate: Date;
  setStartDate: (date: Date) => void;
};

const DateSelector: React.FC<Props> = ({
  selectedMonth,
  setStartDate,
  selectedYear,
  startDate,
}) => {
  const isPrevMonthDisabled = () => {
    const prevMonth = new Date(selectedYear, selectedMonth - 1, 1);
    const now = new Date();
    return prevMonth < new Date(now.getFullYear(), now.getMonth(), 1);
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

  return (
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

      <div className="px-2 py-3 font-medium text-gray-900 min-w-[60px] text-center">
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
  );
};

export default DateSelector;
