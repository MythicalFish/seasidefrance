import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@lib/getBookingPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import UserIcon from '../../PropertyPage/UserIcon';

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
    <a href={`/${property.slug}`} className="bg-white p-4 rounded-xl">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg text-left font-medium">{property.title}</h3>
        <PricingInfo period={period} property={property} />
      </div>
      <DateInfo period={period} property={property} />
    </a>
  );
};

const DateInfo = ({ period, property }: { period: AvailablePeriod; property: PropertyPage }) => {
  return (
    <div className="flex items-center gap-2 mt-3 text-sm opacity-70">
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
      <div className="flex items-center gap-2 text-gray-600 font-medium text-right">
        <UserIcon className="opacity-70" width={19} height={19} />
        <span className="font-medium">{property.maxPeople}</span>
      </div>
    </div>
  );
};

const PricingInfo = ({ period, property }: { period: AvailablePeriod; property: PropertyPage }) => {
  return (
    <div className="flex items-center justify-end gap-3 mb-1">
      {/* {period.discount > 0 && (
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            -{period.discount}% OFF
          </span>
        )} */}
      <div className="text-right">
        <div className="text-2xl font-bold text-gray-900">
          {formatCurrencyRounded(period.pricePerNight)}
        </div>
        {/* <div className="text-sm text-gray-500 -mt-1">per night</div> */}
      </div>
    </div>
  );
};

export default ResultItem;
