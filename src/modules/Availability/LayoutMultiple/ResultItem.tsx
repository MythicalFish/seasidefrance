import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@lib/getBookingPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { getCheckoutUrl } from '@lib/utils';
import Button from '@components/Button';
import Pills from '@components/Pills';
import styles from './styles.module.css';
import clsx from 'clsx';

type Props = {
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
  cta?: boolean;
};

// Helper function to format currency without decimals
const formatCurrencyRounded = (amount: number) => {
  return formatCurrency(Math.ceil(amount)).replace(/\.00$/, '');
};

const ResultItem = ({ property, period, resultIndex, cta }: Props) => {
  if (cta) {
    return (
      <div
        className={clsx(
          'border border-gray-200 rounded-xl transition-all duration-300 mb-6 bg-waves p-4 md:p-6 lg:p-8',
          styles.cta
        )}
      >
        <div className="flex justify-center sm:justify-between items-center flex-wrap gap-6">
          <DateInfo period={period} cta />
          <div className="flex gap-6">
            <PricingInfo period={period} property={property} cta />
            <ActionButtons property={property} period={period} cta />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-xl bg-white transition-all duration-300 mb-6 shadow-sm hover:shadow-lg">
      <div className="block lg:hidden">
        <PropertyImageMobile property={property} period={period} resultIndex={resultIndex} />
        <div className="p-4">
          <a href={`/${property.slug}`} className="block">
            <PropertyTitle property={property} resultIndex={resultIndex} cta={cta} />
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

      <div className="hidden lg:block p-6">
        <div className="flex gap-6">
          <PropertyImageDesktop property={property} period={period} resultIndex={resultIndex} />

          <a href={`/${property.slug}`} className="flex-1">
            <PropertyTitle property={property} resultIndex={resultIndex} cta={cta} />
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
  );
};

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
  cta,
}: {
  property: PropertyPage;
  resultIndex: number;
  cta?: boolean;
}) => (
  <h3
    className={clsx(
      'text-xl font-semibold transition-colors duration-200 mb-3',
      cta ? 'text-white' : 'text-gray-800'
    )}
  >
    {property.title || `Property ${resultIndex + 1}`}
  </h3>
);

const DateInfo = ({ period, cta }: { period: AvailablePeriod; cta?: boolean }) => {
  let className = 'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3';
  if (cta) className += ' text-lg text-white';
  if (!cta) className += ' text-sm';
  return (
    <div className={className}>
      <div className={clsx('flex items-center gap-2', cta ? 'text-white' : 'text-gray-700')}>
        <svg
          className={clsx('w-4 h-4', cta ? 'text-white' : 'text-gray-400')}
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
          {formatDate(period?.checkInDate)} → {formatDate(period.checkOutDate)}
        </span>
      </div>
      <div
        className={clsx(
          'flex items-center justify-center gap-2',
          cta ? 'text-white' : 'text-gray-600'
        )}
      >
        <svg
          className={clsx('w-4 h-4', cta ? 'text-white' : 'text-gray-400')}
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

const PricingInfo = ({
  period,
  property,
  cta,
}: {
  period: AvailablePeriod;
  property: PropertyPage;
  cta?: boolean;
}) => {
  if (cta) {
    return (
      <div className="flex items-center justify-end gap-3">
        {period.discount > 0 && (
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            -{period.discount}% OFF
          </span>
        )}
        <div className="text-right">
          <div className={clsx('text-2xl font-bold', cta ? 'text-white' : 'text-gray-900')}>
            {formatCurrencyRounded(period.pricePerNight)}
          </div>
          <div className={clsx('text-sm', cta ? 'text-white' : 'text-gray-500')}>per night</div>
        </div>
      </div>
    );
  }

  return (
    <a href={`/${property.slug}`} className="block">
      <div className="flex items-center justify-end gap-3 mb-1">
        {period.discount > 0 && (
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
            -{period.discount}% OFF
          </span>
        )}
        <div className="text-right">
          <div className={clsx('text-2xl font-bold', cta ? 'text-white' : 'text-gray-900')}>
            {formatCurrencyRounded(period.pricePerNight)}
          </div>
          <div className={clsx('text-sm', cta ? 'text-white' : 'text-gray-500')}>per night</div>
        </div>
      </div>
      <div
        className={clsx('text-base font-medium text-right', cta ? 'text-white' : 'text-gray-600')}
      >
        {formatCurrencyRounded(period.totalPrice)} total
      </div>
    </a>
  );
};

const ActionButtons = ({
  property,
  period,
  cta,
}: {
  property: PropertyPage;
  period: AvailablePeriod;
  cta?: boolean;
}) => {
  let className = 'flex flex-col gap-2 min-w-[140px]';
  if (cta) className += ' items-center';
  return (
    <div className={className}>
      <Button
        variant="primary"
        size="md"
        href={getCheckoutUrl(property.lodgify.id, period?.checkInDate, period.checkOutDate)}
        className="font-semibold"
      >
        Book Now
      </Button>
      {!cta ? (
        <Button variant="secondary" size="sm" href={`/${property.slug}`}>
          More info
        </Button>
      ) : (
        <div
          className={clsx('text-base font-medium text-right', cta ? 'text-white' : 'text-gray-600')}
        >
          {formatCurrencyRounded(period.totalPrice)} total
        </div>
      )}
    </div>
  );
};

export default ResultItem;
