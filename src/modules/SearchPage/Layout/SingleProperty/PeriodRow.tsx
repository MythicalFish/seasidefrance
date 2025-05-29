import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { getCheckoutUrl } from '@lib/utils';
import styles from './styles.module.css';

type Props = {
  period: AvailablePeriod;
  propertyId: number;
};

const PeriodRow = ({ period, propertyId }: Props) => (
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

export default PeriodRow;
