import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { useState } from 'react';
import styles from './SearchResults.module.css';
import SinglePropertyResults from './SinglePropertyResults';
import { getCheckoutUrl } from '@lib/utils';

export type Result = {
  property: PropertyPage;
  periods: AvailablePeriod[];
};

export type DisplayMode = 'multiple' | 'singleProperty';

type Props = {
  results: Result[];
  isLoading: boolean;
  displayMode?: DisplayMode;
};

const SearchResults: React.FC<Props> = ({ results, isLoading, displayMode = 'multiple' }) => {
  // Use the dedicated SinglePropertyResults component for single property mode
  if (displayMode === 'singleProperty') {
    return <SinglePropertyResults results={results} isLoading={isLoading} />;
  }

  // Continue with the existing multiple properties layout
  return <MultiplePropertiesResults results={results} isLoading={isLoading} />;
};

const MultiplePropertiesResults: React.FC<{
  results: Result[];
  isLoading: boolean;
}> = ({ results, isLoading }) => {
  const [resultsShown] = useState<number>(1); // Show 1 period per property in multiple mode

  if (isLoading) {
    return <LoadingState />;
  }

  if (results.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.container}>
      <MultiplePropertiesHeader />
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

const MultiplePropertiesHeader: React.FC = () => (
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
);

const PropertyResults: React.FC<{
  result: Result;
  resultIndex: number;
  resultsShown: number;
}> = ({ result, resultIndex, resultsShown }) => {
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

const PeriodResult: React.FC<{
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
}> = ({ property, period, resultIndex }) => (
  <div className={styles.resultItem}>
    <div className={styles.resultGrid}>
      <PropertyInfo property={property} period={period} resultIndex={resultIndex} />

      <div className={styles.dateInfo}>{formatDate(period.checkInDate)}</div>

      <div className={styles.dateInfo}>{formatDate(period.checkOutDate)}</div>

      <div className={styles.nightsInfo}>{period.nightLength}</div>

      <div className={styles.pricePerNight}>{formatCurrency(period.pricePerNight)}</div>

      <div className={styles.totalPriceContainer}>
        <span className={styles.totalPrice}>{formatCurrency(period.totalPrice)}</span>
        <a
          href={getCheckoutUrl(property.lodgify.id, period.checkInDate, period.checkOutDate)}
          className={styles.bookButton}
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
);

const PropertyInfo: React.FC<{
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
}> = ({ property, period, resultIndex }) => (
  <div className={styles.propertyInfo}>
    <h3 className={styles.propertyName}>{property.name || `Property ${resultIndex + 1}`}</h3>
    {period.discount > 0 && (
      <span className={styles.discountBadge}>
        {period.promoName} -{period.discount}%
      </span>
    )}
  </div>
);

const NoPeriodsAvailable: React.FC<{
  property: PropertyPage;
  resultIndex: number;
}> = ({ property, resultIndex }) => (
  <div className={styles.resultItem}>
    <div className={styles.resultGrid}>
      <div className={styles.propertyInfo}>
        <h3 className={styles.propertyName}>{property.name || `Property ${resultIndex + 1}`}</h3>
      </div>
      <div className={styles.noPeriodsMessage}>No available periods for your selected criteria</div>
    </div>
  </div>
);

export default SearchResults;
