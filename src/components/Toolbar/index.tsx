import { useStore } from '@nanostores/react';
import { bookingStore, setNights, setMonth } from '../../stores/booking';

const months = [
  [1, 'January'],
  [2, 'February'],
  [3, 'March'],
  [4, 'April'],
  [5, 'May'],
  [6, 'June'],
  [7, 'July'],
  [8, 'August'],
  [9, 'September'],
  [10, 'October'],
  [11, 'November'],
  [12, 'December'],
];

const Toolbar = () => {
  const { nights, month } = useStore(bookingStore);

  return (
    <div>
      <select
        className="w-full p-2 rounded-md mb-2"
        value={nights}
        onChange={(e) => setNights(Number(e.target.value))}
      >
        <option value={2}>2 nights</option>
        <option value={3}>3 nights</option>
        <option value={4}>4 nights</option>
        <option value={5}>5 nights</option>
        <option value={6}>6 nights</option>
        <option value={7}>7 nights</option>
      </select>
      <select
        className="w-full p-2 rounded-md"
        value={month}
        onChange={(e) => setMonth(Number(e.target.value))}
      >
        {months.map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Toolbar;
