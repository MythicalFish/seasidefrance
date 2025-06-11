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
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  startDate: Date;
  setStartDate: (date: Date) => void;
  isPickerOpen: boolean;
  setIsPickerOpen: (isPickerOpen: boolean) => void;
};

const DateSelector: React.FC<Props> = ({
  selectedDay,
  selectedMonth,
  isPickerOpen,
  setStartDate,
  selectedYear,
  startDate,
  setIsPickerOpen,
}) => {
  const isPrevMonthDisabled = () => {
    const prevMonth = new Date(selectedYear, selectedMonth - 1, 1);
    const now = new Date();
    return prevMonth < new Date(now.getFullYear(), now.getMonth(), 1);
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    const startDateStr = startDate.toISOString().split('T')[0];
    const newDate = new Date(startDateStr);
    newDate.setDate(1);
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

  const currentYear = new Date().getFullYear();
  const isNextYear = selectedYear > currentYear;

  return (
    <div className="flex items-center border border-gray-300 min-w-[160px] rounded-[99px] overflow-hidden flex-auto w-full">
      <button
        type="button"
        onClick={() => handleMonthChange('prev')}
        disabled={isPrevMonthDisabled()}
        className="px-3 py-4 hover:bg-gray-50 border-r border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous month"
      >
        <ChevronLeftIcon />
      </button>

      <button
        type="button"
        className="px-2 py-0 text-slate-700 min-w-[60px] w-full flex-auto text-center whitespace-nowrap hover:bg-gray-50 transition-colors"
        onClick={() => setIsPickerOpen(!isPickerOpen)}
      >
        {selectedDay} {MONTHS[selectedMonth]}
        {isNextYear && <div className="text-sm font-medium text-gray-400">{selectedYear}</div>}
      </button>

      <button
        type="button"
        onClick={() => handleMonthChange('next')}
        className="px-3 py-4 hover:bg-gray-50 border-l border-gray-300 transition-colors"
        aria-label="Next month"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default DateSelector;
