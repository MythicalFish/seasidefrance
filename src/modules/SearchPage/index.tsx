import type { PropertyPage } from '@data/properties/types';
import getPeriods, { type AvailablePeriod } from '@components/DateSelector/getPeriods';
import { useEffect, useState } from 'react';

type Props = {
  properties: PropertyPage[];
};

type Result = {
  property: PropertyPage;
  periods: AvailablePeriod[];
};

const SearchPage = ({ properties }: Props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [stayLength, setStayLength] = useState<number>(7);
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    let results: Result[] = [];
    for (const property of properties) {
      const rates = property.rates;
      const availability = property.availability || [];
      const periods = getPeriods(rates, availability, stayLength, startDate);
      results.push({ property, periods: [periods[0]] });
    }
    setResults(results);
    setIsLoading(false);
  }, [properties, stayLength, startDate]);

  console.log('🟢🟢🟢 results', results);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  const formatDateDisplay = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Stay</h1>
          <p className="text-gray-600">
            Search available properties for your desired dates and duration
          </p>
        </div>

        {/* Search Controls */}
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

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Searching available periods...</p>
          </div>
        )}

        {/* Results */}
        {!isLoading && (
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Property Header */}
                <div className="bg-blue-50 px-6 py-4 border-b">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {result.property.name || `Property ${index + 1}`}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {result.periods.length} available period{result.periods.length !== 1 ? 's' : ''}{' '}
                    found
                  </p>
                </div>

                {/* Available Periods */}
                <div className="p-6">
                  {result.periods.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <p>No available periods found for your selected criteria.</p>
                      <p className="text-sm mt-1">Try adjusting your dates or stay length.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {result.periods.map((period, periodIndex) => (
                        <div
                          key={periodIndex}
                          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          {/* Dates */}
                          <div className="mb-3">
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                              <span>Check-in</span>
                              <span>Check-out</span>
                            </div>
                            <div className="flex items-center justify-between font-medium">
                              <span>{formatDateDisplay(period.checkInDate)}</span>
                              <span className="text-gray-400">→</span>
                              <span>{formatDateDisplay(period.checkOutDate)}</span>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="mb-3">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {period.nightLength} night{period.nightLength !== 1 ? 's' : ''}
                            </span>
                          </div>

                          {/* Pricing */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Total Price:</span>
                              <span className="font-semibold text-lg">
                                {formatCurrency(period.totalPrice)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Per Night:</span>
                              <span className="text-sm">
                                {formatCurrency(period.pricePerNight)}
                              </span>
                            </div>

                            {/* Discount */}
                            {period.discount > 0 && (
                              <div className="bg-green-50 border border-green-200 rounded p-2 mt-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-green-700 font-medium">
                                    {period.promoName}
                                  </span>
                                  <span className="text-sm text-green-700 font-semibold">
                                    -{period.discount}%
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Book Button */}
                          <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                            Book Now
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Properties */}
        {!isLoading && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
