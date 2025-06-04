import Button from '@components/Button';

type Props = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  isPickerOpen: boolean;
  setIsPickerOpen: (isOpen: boolean) => void;
};

const ExactDateSelector = ({ startDate, setStartDate, isPickerOpen, setIsPickerOpen }: Props) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    setStartDate(selectedDate);
  };

  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="mt-2">
      {isPickerOpen ? (
        <input
          type="date"
          value={formatDateForInput(startDate)}
          onChange={handleDateChange}
          className="px-3 py-2 border border-gray-300 rounded-lg shadow-lg bg-white"
          min={formatDateForInput(new Date())}
          autoFocus
        />
      ) : (
        <Button size="sm" variant="ghost" onClick={() => setIsPickerOpen(!isPickerOpen)}>
          Select exact date
        </Button>
      )}
    </div>
  );
};

export default ExactDateSelector;
