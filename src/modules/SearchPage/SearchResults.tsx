import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';

export type Result = {
  property: PropertyPage;
  periods: AvailablePeriod[];
};

type Props = {
  results: Result[];
  isLoading: boolean;
  displayMode?: string;
};

const SearchResults: React.FC<Props> = ({ results, isLoading, displayMode = 'singlePeriod' }) => {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Searching available periods...</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No properties available.</p>
      </div>
    );
  }

  return (
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
          const period = result.periods[0]; // Only show first period for this mode
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
                    <span className="text-sm text-gray-900">{formatDate(period.checkInDate)}</span>
                  </div>

                  {/* Check-out Date */}
                  <div className="col-span-2">
                    <span className="text-sm text-gray-900">{formatDate(period.checkOutDate)}</span>
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
  );

  return null; // Should not happen if displayMode is one of the valid options
};

export default SearchResults;
