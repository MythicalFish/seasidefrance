import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@lib/getBookingPeriods';
import { formatDate, formatCurrency } from '@lib/date';

type Props = {
  property: PropertyPage;
  period: AvailablePeriod;
};

// Helper function to format currency without decimals
const formatCurrencyRounded = (amount: number) => {
  return formatCurrency(Math.ceil(amount)).replace(/\.00$/, '');
};

const ResultItem = ({ property, period }: Props) => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex gap-6">
        <a href={`/${property.slug}`} className="flex-1">
          {property.name}
          <DateInfo period={period} />
        </a>

        <div className="text-right">
          <PricingInfo period={period} property={property} />
        </div>
      </div>
    </div>
  );
};

const DateInfo = ({ period, single }: { period: AvailablePeriod; single?: boolean }) => {
  let className = 'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3';
  if (single) className += ' text-lg';
  if (!single) className += ' text-sm';
  return (
    <div className={className}>
      <div className="flex items-center gap-2 text-gray-700">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="font-medium">
          {formatDate(period.checkInDate)} → {formatDate(period.checkOutDate)}
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
          />
        </svg>
        <span className="font-medium">
          {period.nightLength} night{period.nightLength !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
};

const PricingInfo = ({ period, property }: { period: AvailablePeriod; property: PropertyPage }) => {
  return (
    <a href={`/${property.slug}`} className="block">
      <div className="flex items-center justify-end gap-3 mb-1">
        {period.discount > 0 && (
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            -{period.discount}% OFF
          </span>
        )}
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrencyRounded(period.pricePerNight)}
          </div>
          <div className="text-sm text-gray-500 -mt-1">per night</div>
        </div>
      </div>
      <div className="text-base text-gray-600 font-medium text-right">
        {formatCurrencyRounded(period.totalPrice)} total
      </div>
    </a>
  );
};

export default ResultItem;
