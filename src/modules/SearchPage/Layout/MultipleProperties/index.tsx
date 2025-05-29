import { useState } from 'react';
import type { Result } from '../index';
import LoadingState from '../../shared/LoadingState';
import EmptyState from '../../shared/EmptyState';
import PropertyResults from './PropertyResults';
import styles from './styles.module.css';

type Props = {
  results: Result[];
  isLoading: boolean;
};

const MultipleProperties = ({ results, isLoading }: Props) => {
  const [resultsShown] = useState<number>(1); // Show 1 period per property in multiple mode

  if (isLoading) {
    return <LoadingState />;
  }

  if (results.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerGrid}>
          <div className={styles.headerProperty}>Property</div>
          <div className={styles.headerCheckIn}>Check-in</div>
          <div className={styles.headerCheckOut}>Check-out</div>
          <div className={styles.headerNights}>Nights</div>
          <div className={styles.headerPerNight}>Per Night</div>
          <div className={styles.headerTotal}>Total Price</div>
        </div>
      </div>
      <div className={styles.resultsList}>
        {results.map((result, resultIndex) => (
          <PropertyResults
            key={resultIndex}
            result={result}
            resultIndex={resultIndex}
            resultsShown={resultsShown}
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleProperties;
