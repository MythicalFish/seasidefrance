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
