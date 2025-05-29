import { useState } from 'react';
import type { Result } from '../index';
import LoadingState from '../../shared/LoadingState';
import EmptyState from '../../shared/EmptyState';
import PeriodRow from './PeriodRow';
import styles from './styles.module.css';

type Props = {
  results: Result[];
  isLoading: boolean;
};

const INITIAL_PERIODS_SHOWN = 6;
const PERIODS_TO_ADD = 5;

const SingleProperty = ({ results, isLoading }: Props) => {
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
    return <EmptyState message="No available periods for your selected criteria." />;
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

export default SingleProperty;
