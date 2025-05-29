import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { getCheckoutUrl } from '@lib/utils';
import Button from '@components/Button';
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

      <div className={styles.dateInfo}>
        {`${formatDate(period.checkInDate)} - ${formatDate(period.checkOutDate)}`}
        <div className={styles.nights}>{period.nightLength} nights</div>
      </div>

      <div className={styles.totalPriceContainer}>
        <div>
          {period.discount > 0 && <span className={styles.discountBadge}>-{period.discount}%</span>}
          <span className="text-xl font-medium">{formatCurrency(period.pricePerNight)}</span>
        </div>
        <div>
          <span className="opacity-50">{formatCurrency(period.totalPrice)}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button variant="secondary" size="xs" href={`/${property.slug}#availability`}>
          See all dates
        </Button>
        <Button
          variant="primary"
          size="sm"
          href={getCheckoutUrl(property.lodgify.id, period.checkInDate, period.checkOutDate)}
        >
          Book Now
        </Button>
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
  <a href={`/${property.slug}`} className={styles.propertyInfo}>
    <h3 className={styles.propertyName}>{property.name || `Property ${resultIndex + 1}`}</h3>
    <Button variant="secondary" size="xs">
      More info
    </Button>
  </a>
);

export default PeriodResult;
