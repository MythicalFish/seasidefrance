import type { PropertyPage } from '@data/properties/types';
import type { Result } from '../index';
import PeriodResult from './PeriodResult';
import styles from './styles.module.css';

type Props = {
  result: Result;
  resultIndex: number;
  resultsShown: number;
};

const PropertyResults = ({ result, resultIndex, resultsShown }: Props) => {
  const { property, periods } = result;
  const shownPeriods = periods.slice(0, resultsShown);

  if (periods.length === 0) {
    return <NoPeriodsAvailable property={property} resultIndex={resultIndex} />;
  }

  return (
    <>
      {shownPeriods.map((period, periodIndex) => (
        <PeriodResult
          key={`${resultIndex}-${periodIndex}`}
          property={property}
          period={period}
          resultIndex={resultIndex}
        />
      ))}
    </>
  );
};

const NoPeriodsAvailable = ({
  property,
  resultIndex,
}: {
  property: PropertyPage;
  resultIndex: number;
}) => (
  <div className={styles.resultItem}>
    <div className={styles.resultGrid}>
      <div className={styles.propertyInfo}>
        <h3 className={styles.propertyName}>{property.name || `Property ${resultIndex + 1}`}</h3>
      </div>
      <div className={styles.noPeriodsMessage}>No available periods for your selected criteria</div>
    </div>
  </div>
);

export default PropertyResults;
