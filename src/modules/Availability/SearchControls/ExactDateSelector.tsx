import { useState } from 'react';

type Props = {
  startDate: Date;
  setStartDate: (date: Date) => void;
};

const ExactDateSelector = ({ startDate, setStartDate }: Props) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    setStartDate(selectedDate);
    setIsPickerOpen(false);
  };

  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsPickerOpen(!isPickerOpen)}
        className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-center font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        Select exact date
      </button>

      {isPickerOpen && (
        <div className="absolute top-full left-0 mt-1 z-10">
          <input
            type="date"
            value={formatDateForInput(startDate)}
            onChange={handleDateChange}
            className="px-3 py-2 border border-gray-300 rounded-lg shadow-lg bg-white"
            min={formatDateForInput(new Date())}
            autoFocus
            onBlur={() => setIsPickerOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ExactDateSelector;
