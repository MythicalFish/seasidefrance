import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@lib/getBookingPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import UserIcon from '../../PropertyPage/UserIcon';
import styles from './styles.module.css';

type Props = {
  property: PropertyPage;
  period: AvailablePeriod;
  index: number;
};

// Helper function to format currency without decimals
const formatCurrencyRounded = (amount: number) => {
  return formatCurrency(Math.ceil(amount)).replace(/\.00$/, '');
};

const ResultItem = ({ property, period, index }: Props) => {
  let className = 'bg-white px-4 py-3 rounded-xl justify-between gap-2 whitespace-nowrap';
  if (index === 3) {
    className += ' hidden xl:flex';
  } else if (index === 2) {
    className += ' hidden lg:flex';
  } else {
    className += ' flex';
  }
  return (
    <a href={`/${property.slug}`} className={className}>
      <DateInfo period={period} property={property} />
      <PricingInfo period={period} property={property} />
    </a>
  );
};

const DateInfo = ({ period, property }: { period: AvailablePeriod; property: PropertyPage }) => {
  return (
    <div className="flex items-center gap-2 text-sm opacity-70 font-open text-gray-900">
      <span className="font-medium">{formatDate(period.checkInDate)}</span>
      <span className={styles.separator} />
      <span className="font-medium">{period.nightLength} nights</span>
      <span className={styles.separator} />
      <div className="flex items-center gap-1 font-medium text-right">
        <UserIcon className="opacity-70" width={19} height={19} />
        <span className="font-medium">{property.maxPeople}</span>
      </div>
    </div>
  );
};

const PricingInfo = ({ period, property }: { period: AvailablePeriod; property: PropertyPage }) => {
  return (
    <div className="text-gray-800 flex items-center">
      <span className="text-xl font-bold">{formatCurrencyRounded(period.pricePerNight)}</span>
      <span className="text-xl text-gray-300 ml-1">/</span>
      <span className="text-xs font-sans text-gray-400 font-medium">night</span>
    </div>
  );
};

export default ResultItem;
