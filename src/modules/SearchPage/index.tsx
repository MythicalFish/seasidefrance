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
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-3 border-b">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
                <div className="col-span-3">Property</div>
                <div className="col-span-2">Check-in</div>
                <div className="col-span-2">Check-out</div>
                <div className="col-span-1 text-center">Nights</div>
                <div className="col-span-2 text-right">Per Night</div>
                <div className="col-span-2 text-right">Total Price</div>
              </div>
            </div>

            {/* Property Rows */}
            <div className="divide-y divide-gray-200">
              {results.map((result, index) => {
                const period = result.periods[0]; // Only show first period
                return (
                  <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    {period ? (
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Property Name */}
                        <div className="col-span-3">
                          <h3 className="font-medium text-gray-900">
                            {result.property.name || `Property ${index + 1}`}
                          </h3>
                          {period.discount > 0 && (
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                              {period.promoName} -{period.discount}%
                            </span>
                          )}
                        </div>

                        {/* Check-in Date */}
                        <div className="col-span-2">
                          <span className="text-sm text-gray-900">
                            {formatDateDisplay(period.checkInDate)}
                          </span>
                        </div>

                        {/* Check-out Date */}
                        <div className="col-span-2">
                          <span className="text-sm text-gray-900">
                            {formatDateDisplay(period.checkOutDate)}
                          </span>
                        </div>

                        {/* Nights */}
                        <div className="col-span-1 text-center">
                          <span className="text-sm text-gray-900">{period.nightLength}</span>
                        </div>

                        {/* Per Night Price */}
                        <div className="col-span-2 text-right">
                          <span className="text-sm font-medium text-gray-900">
                            {formatCurrency(period.pricePerNight)}
                          </span>
                        </div>

                        {/* Total Price */}
                        <div className="col-span-2 text-right">
                          <div className="flex flex-col items-end">
                            <span className="text-lg font-semibold text-gray-900">
                              {formatCurrency(period.totalPrice)}
                            </span>
                            <button className="mt-1 bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                          <h3 className="font-medium text-gray-900">
                            {result.property.name || `Property ${index + 1}`}
                          </h3>
                        </div>
                        <div className="col-span-9 text-center text-gray-500">
                          No available periods for your selected criteria
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
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
