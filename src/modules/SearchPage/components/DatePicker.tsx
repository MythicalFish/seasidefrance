import { useState, useRef, useEffect } from 'react';
import styles from './DatePicker.module.css';

type Props = {
  value: Date;
  onChange: (date: Date) => void;
  label: string;
  id: string;
  minDate?: Date;
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

const DatePicker: React.FC<Props> = ({ value, onChange, label, id, minDate }) => {
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  const selectedDay = value.getDate();
  const selectedMonth = value.getMonth();
  const selectedYear = value.getFullYear();

  // Close month selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowMonthSelector(false);
      }
    };

    if (showMonthSelector) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showMonthSelector]);

  const handlePreviousDay = () => {
    const newDate = new Date(value);
    newDate.setDate(newDate.getDate() - 1);

    // Don't allow dates before minDate
    if (minDate && newDate < minDate) return;

    onChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(value);
    newDate.setDate(newDate.getDate() + 1);
    onChange(newDate);
  };

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = new Date(value);
    newDate.setMonth(monthIndex);

    // Ensure the date is valid (handle cases like Feb 31 -> Feb 28/29)
    if (newDate.getMonth() !== monthIndex) {
      newDate.setDate(0); // Set to last day of previous month
    }

    // Don't allow dates before minDate
    if (minDate && newDate < minDate) {
      newDate.setTime(minDate.getTime());
    }

    onChange(newDate);
    setShowMonthSelector(false);
  };

  const handleYearSelect = (year: number) => {
    const newDate = new Date(value);
    newDate.setFullYear(year);

    // Don't allow dates before minDate
    if (minDate && newDate < minDate) {
      newDate.setTime(minDate.getTime());
    }

    onChange(newDate);
  };

  const formatDay = (date: Date) => {
    return date.getDate().toString().padStart(2, '0');
  };

  const isDateDisabled = (date: Date) => {
    return minDate ? date < minDate : false;
  };

  const isPreviousDayDisabled = () => {
    const previousDay = new Date(value.getTime() - 24 * 60 * 60 * 1000);
    return isDateDisabled(previousDay);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <div className={styles.datePickerContainer}>
        {/* Date Navigation */}
        <div className={styles.dateNavigation}>
          <button
            type="button"
            className={styles.chevronButton}
            onClick={handlePreviousDay}
            disabled={isPreviousDayDisabled()}
            aria-label="Previous day"
          >
            <ChevronLeftIcon />
          </button>

          <div className={styles.dateDisplay}>
            <span className={styles.day}>{formatDay(value)}</span>

            <div className={styles.monthYearContainer}>
              <button
                type="button"
                className={styles.monthButton}
                onClick={() => setShowMonthSelector(!showMonthSelector)}
                aria-expanded={showMonthSelector}
                aria-haspopup="true"
              >
                {MONTHS[selectedMonth]}
                <ChevronDownIcon />
              </button>

              <select
                className={styles.yearSelect}
                value={selectedYear}
                onChange={(e) => handleYearSelect(Number(e.target.value))}
                aria-label="Select year"
              >
                <option value={currentYear}>{currentYear}</option>
                <option value={nextYear}>{nextYear}</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className={styles.chevronButton}
            onClick={handleNextDay}
            aria-label="Next day"
          >
            <ChevronRightIcon />
          </button>
        </div>

        {/* Month Selector Dropdown */}
        {showMonthSelector && (
          <div className={styles.monthSelector} role="listbox" aria-label="Select month">
            <div className={styles.monthGrid}>
              {MONTHS.map((month, index) => (
                <button
                  key={month}
                  type="button"
                  className={`${styles.monthOption} ${
                    index === selectedMonth ? styles.monthOptionSelected : ''
                  }`}
                  onClick={() => handleMonthSelect(index)}
                  role="option"
                  aria-selected={index === selectedMonth}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        )}
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

const ChevronDownIcon: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
);

export default DatePicker;
