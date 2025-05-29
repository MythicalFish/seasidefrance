import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { getCheckoutUrl } from '@lib/utils';
import styles from './styles.module.css';

type Props = {
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
};

const PeriodResult = ({ property, period, resultIndex }: Props) => (
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

const PropertyInfo = ({
  property,
  period,
  resultIndex,
}: {
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
}) => (
  <div className={styles.propertyInfo}>
    <h3 className={styles.propertyName}>{property.name || `Property ${resultIndex + 1}`}</h3>
    {period.discount > 0 && (
      <span className={styles.discountBadge}>
        {period.promoName} -{period.discount}%
      </span>
    )}
  </div>
);

export default PeriodResult;
