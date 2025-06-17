import type { AvailablePeriod } from '@lib/getBookingPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { getCheckoutUrl } from '@lib/utils';
import Button from '@components/Button';

type Props = {
  period: AvailablePeriod;
  propertyId: number;
};

const PeriodRow = ({ period, propertyId }: Props) => (
  <div className="border-b border-gray-200 transition-colors duration-150 hover:bg-gray-50 last:border-b-0 md:hover:bg-gray-50 max-md:hover:bg-white max-md:p-0 max-md:m-0">
    <div className="grid grid-cols-[1.5fr_1.5fr_0.8fr_1.2fr_1.5fr] gap-4 items-center px-6 py-4 max-md:block max-md:p-4">
      {/* Check-in Date */}
      <div className="flex flex-col gap-1 max-md:mb-3 max-md:pb-3 max-md:border-b max-md:border-gray-100 max-md:before:content-['Check-in:'] max-md:before:text-gray-500 max-md:before:text-xs max-md:before:font-medium max-md:before:block max-md:before:mb-1">
        <div className="text-sm text-gray-900 font-medium">{formatDate(period.checkInDate)}</div>
        {period.discount > 0 && (
          <div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full w-fit">
            -{period.discount}%
          </div>
        )}
      </div>

      {/* Check-out Date */}
      <div className="flex flex-col gap-1 max-md:mb-3 max-md:pb-3 max-md:border-b max-md:border-gray-100 max-md:before:content-['Check-out:'] max-md:before:text-gray-500 max-md:before:text-xs max-md:before:font-medium max-md:before:block max-md:before:mb-1">
        <div className="text-sm text-gray-900 font-medium">{formatDate(period.checkOutDate)}</div>
      </div>

      {/* Nights */}
      <div className="flex justify-center max-md:justify-start max-md:mb-3 max-md:pb-3 max-md:border-b max-md:border-gray-100 max-md:before:content-['Nights:'] max-md:before:text-gray-500 max-md:before:text-xs max-md:before:font-medium max-md:before:block max-md:before:mb-1">
        <span className="text-sm text-gray-900 font-medium">{period.nightLength}</span>
      </div>

      {/* Price Per Night */}
      <div className="flex justify-end max-md:justify-start max-md:mb-3 max-md:pb-3 max-md:border-b max-md:border-gray-100 max-md:before:content-['Per_Night:'] max-md:before:text-gray-500 max-md:before:text-xs max-md:before:font-medium max-md:before:block max-md:before:mb-1">
        <span className="text-sm text-gray-900 font-medium">
          {formatCurrency(period.pricePerNight)}
        </span>
      </div>

      {/* Total Price Section */}
      <div className="flex flex-col items-end gap-2 max-md:items-start max-md:border-b-0">
        <div className="text-lg font-semibold text-gray-900 max-md:text-xl">
          {formatCurrency(period.totalPrice)}
        </div>
        <Button
          variant="primary"
          size="sm"
          href={getCheckoutUrl(propertyId, period.checkInDate, period.checkOutDate)}
          className="max-md:w-full max-md:py-3 max-md:px-4"
        >
          Book Now
        </Button>
      </div>
    </div>
  </div>
);

export default PeriodRow;
