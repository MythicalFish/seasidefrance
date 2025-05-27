import { formatDate } from '@lib/date';

type Props = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  stayLength: number;
  setStayLength: (length: number) => void;
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
        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            id="startDate"
            value={formatDate(startDate)}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min={formatDate(new Date())}
          />
        </div>

        {/* Stay Length */}
        <div>
          <label htmlFor="stayLength" className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Nights
          </label>
          <select
            id="stayLength"
            value={stayLength}
            onChange={(e) => setStayLength(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={3}>3 nights</option>
            <option value={5}>5 nights</option>
            <option value={7}>7 nights</option>
            <option value={10}>10 nights</option>
            <option value={14}>14 nights</option>
            <option value={21}>21 nights</option>
            <option value={30}>30 nights</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchControls;
