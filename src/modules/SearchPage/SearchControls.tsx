import DatePicker from './components/DatePicker';

export type StayLengthOption = 2 | 3 | 4 | 5 | 6 | 7 | 8;

type Props = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  stayLength: StayLengthOption;
  setStayLength: (length: StayLengthOption) => void;
};

const SearchControls: React.FC<Props> = ({
  startDate,
  setStartDate,
  stayLength,
  setStayLength,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Check-in Date */}
        <DatePicker
          value={startDate}
          onChange={setStartDate}
          label="Check-in Date"
          id="startDate"
          minDate={new Date()}
        />

        {/* Stay Length */}
        <div>
          <label htmlFor="stayLength" className="block text-sm font-medium text-gray-700 mb-2">
            Stay length
          </label>
          <select
            id="stayLength"
            value={stayLength}
            onChange={(e) => setStayLength(Number(e.target.value) as StayLengthOption)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={2}>2 nights</option>
            <option value={3}>3 nights</option>
            <option value={4}>4 nights</option>
            <option value={5}>5 nights</option>
            <option value={6}>6 nights</option>
            <option value={7}>7 nights</option>
            <option value={8}>8+ nights</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchControls;
