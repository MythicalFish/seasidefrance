import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { getCheckoutUrl } from '@lib/utils';
import Button from '@components/Button';
import Pills from '@components/Pills';

type Props = {
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
};

// Helper function to format currency without decimals
const formatCurrencyRounded = (amount: number) => {
  return formatCurrency(Math.ceil(amount)).replace(/\.00$/, '');
};

const ResultItem = ({ property, period, resultIndex }: Props) => (
  <div className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 mb-6">
    <div className="block">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <PropertyImageMobile property={property} period={period} resultIndex={resultIndex} />
        <div className="p-4">
          <a href={`/${property.slug}`} className="block">
            <PropertyTitle property={property} resultIndex={resultIndex} />
            <DateInfo period={period} />
          </a>
          <div className="flex justify-between items-start mt-4">
            <div className="flex-1">
              <PricingInfo period={period} property={property} />
            </div>
            <div className="ml-4">
              <ActionButtons property={property} period={period} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block p-6">
        <div className="flex gap-6">
          <PropertyImageDesktop property={property} period={period} resultIndex={resultIndex} />

          <a href={`/${property.slug}`} className="flex-1">
            <PropertyTitle property={property} resultIndex={resultIndex} />
            <Pills items={property.features.slice(0, 8)} small />
            <DateInfo period={period} />
          </a>

          <div className="text-right">
            <PricingInfo period={period} property={property} />
            <div className="mt-4">
              <ActionButtons property={property} period={period} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PropertyImageMobile = ({
  property,
  resultIndex,
}: {
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
}) => (
  <a href={`/${property.slug}`} className="w-full h-48 overflow-hidden rounded-t-xl">
    <img
      src={`/thumbnails/${property.lodgify.id}.jpg`}
      alt={property.title || `Property ${resultIndex + 1}`}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </a>
);

const PropertyImageDesktop = ({
  property,
  resultIndex,
}: {
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
}) => (
  <a href={`/${property.slug}`} className="block group flex-shrink-0">
    <img
      src={`/thumbnails/${property.lodgify.id}.jpg`}
      alt={property.title || `Property ${resultIndex + 1}`}
      className="w-64 h-44 object-cover rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 ring-1 ring-gray-200 group-hover:ring-gray-300"
      loading="lazy"
    />
  </a>
);

const PropertyTitle = ({
  property,
  resultIndex,
}: {
  property: PropertyPage;
  resultIndex: number;
}) => (
  <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-200 mb-3">
    {property.title || `Property ${resultIndex + 1}`}
  </h3>
);

const DateInfo = ({ period }: { period: AvailablePeriod }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
    <div className="flex items-center gap-2 text-gray-700">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="font-medium text-sm">
        {formatDate(period.checkInDate)} → {formatDate(period.checkOutDate)}
      </span>
    </div>
    <div className="flex items-center gap-2 text-gray-600">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
        />
      </svg>
      <span className="text-sm font-medium">
        {period.nightLength} night{period.nightLength !== 1 ? 's' : ''}
      </span>
    </div>
  </div>
);

const PricingInfo = ({ period, property }: { period: AvailablePeriod; property: PropertyPage }) => (
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

const ActionButtons = ({
  property,
  period,
}: {
  property: PropertyPage;
  period: AvailablePeriod;
}) => (
  <div className="flex flex-col gap-3 min-w-[140px]">
    <Button
      variant="primary"
      size="md"
      href={getCheckoutUrl(property.lodgify.id, period.checkInDate, period.checkOutDate)}
      className="font-semibold"
    >
      Book Now
    </Button>
    {/* <Button variant="secondary" size="sm" href={`/${property.slug}#availability`}>
      See all dates
    </Button> */}
  </div>
);

export default ResultItem;
