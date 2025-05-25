import { formatDate } from 'src/lib/date';
import { currencySymbol, getCheckoutUrl } from '@lib/utils';
import type { AvailablePeriod } from './getPeriods';

import styles from './styles.module.css';

type Props = {
  period?: AvailablePeriod;
  currencyCode?: string;
  propertyId: number;
  propertySlug?: string;
  showMore?: boolean;
};

const Item = ({ period, currencyCode, propertyId, propertySlug, showMore = false }: Props) => {
  if (showMore) {
    return (
      <a className={styles.item} href={`/${propertySlug}#book`}>
        <div className="text-sm opacity-80">Choose exact dates</div>
      </a>
    );
  }
  if (!period) return null;
  return (
    <a
      className={styles.item}
      href={getCheckoutUrl(propertyId, period.checkInDate, period.checkOutDate)}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="font-medium">
            {formatDate(period.checkInDate)} - {formatDate(period.checkOutDate)}
          </div>
          <div className="text-sm opacity-80">{period.nightLength} nights</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-lg font-semibold leading-none">
            {`${currencySymbol(currencyCode)}${period.pricePerNight.toFixed(2)}`}
          </div>
          <div className="text-xs opacity-80">per night</div>
        </div>
      </div>
    </a>
  );
};

export default Item;
