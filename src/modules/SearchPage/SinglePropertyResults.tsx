import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { useState } from 'react';
import styles from './SinglePropertyResults.module.css';
import { getCheckoutUrl } from '@lib/utils';

export type Result = {
  property: PropertyPage;
  periods: AvailablePeriod[];
};

type Props = {
  results: Result[];
  isLoading: boolean;
};

const INITIAL_PERIODS_SHOWN = 6;
const PERIODS_TO_ADD = 5;

const SinglePropertyResults: React.FC<Props> = ({ results, isLoading }) => {
  const [periodsShown, setPeriodsShown] = useState(INITIAL_PERIODS_SHOWN);

  if (isLoading) {
    return <LoadingState />;
  }

  if (results.length === 0) {
    return <EmptyState />;
  }

  // For single property, we only have one result
  const result = results[0];
  const { periods } = result;

  if (periods.length === 0) {
    return <NoPeriodsAvailable />;
  }

  const shownPeriods = periods.slice(0, periodsShown);
  const hasMorePeriods = periods.length > periodsShown;
  const remainingCount = periods.length - periodsShown;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerGrid}>
          <div className={styles.headerCheckIn}>Check-in</div>
          <div className={styles.headerCheckOut}>Check-out</div>
          <div className={styles.headerNights}>Nights</div>
          <div className={styles.headerPerNight}>Per Night</div>
          <div className={styles.headerTotal}>Total Price</div>
        </div>
      </div>

      <div className={styles.resultsList}>
        {shownPeriods.map((period, index) => (
          <PeriodRow key={index} period={period} propertyId={result.property.id} />
        ))}

        {hasMorePeriods && (
          <div className={styles.showMoreContainer}>
            <button
              className={styles.showMoreButton}
              onClick={() => setPeriodsShown((prev) => prev + PERIODS_TO_ADD)}
            >
              Show More Results ({remainingCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const LoadingState: React.FC = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loadingSpinner}></div>
    <p className={styles.loadingText}>Searching available periods...</p>
  </div>
);

const EmptyState: React.FC = () => (
  <div className={styles.emptyContainer}>
    <p className={styles.emptyText}>No properties available.</p>
  </div>
);

const NoPeriodsAvailable: React.FC = () => (
  <div className={styles.emptyContainer}>
    <p className={styles.emptyText}>No available periods for your selected criteria.</p>
  </div>
);

const PeriodRow: React.FC<{ period: AvailablePeriod; propertyId: number }> = ({
  period,
  propertyId,
}) => (
  <div className={styles.periodRow}>
    <div className={styles.periodGrid}>
      <div className={styles.checkInDate}>
        <div className={styles.dateValue}>{formatDate(period.checkInDate)}</div>
        {period.discount > 0 && (
          <div className={styles.discountBadge}>
            {period.promoName} -{period.discount}%
          </div>
        )}
      </div>

      <div className={styles.checkOutDate}>
        <div className={styles.dateValue}>{formatDate(period.checkOutDate)}</div>
      </div>

      <div className={styles.nights}>
        <span className={styles.nightsValue}>{period.nightLength}</span>
      </div>

      <div className={styles.pricePerNight}>
        <span className={styles.priceValue}>{formatCurrency(period.pricePerNight)}</span>
      </div>

      <div className={styles.totalPriceSection}>
        <div className={styles.totalPrice}>{formatCurrency(period.totalPrice)}</div>
        <a
          href={getCheckoutUrl(propertyId, period.checkInDate, period.checkOutDate)}
          className={styles.bookButton}
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
);

export default SinglePropertyResults;
