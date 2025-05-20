import { formatDate } from 'src/lib/date';
import { currencySymbol, getCheckoutUrl } from 'src/lib/utils';
import type { AvailablePeriod } from './getPeriods';

type Props = {
  period: AvailablePeriod;
  currencyCode: string;
  propertyId: number;
};

const Item = ({ period, currencyCode, propertyId }: Props) => {
  console.log('🟢🟢🟢 period', period);
  return (
    <a
      className="block bg-white p-4 rounded-lg shadow"
      href={getCheckoutUrl(propertyId, period.checkInDate, period.checkOutDate)}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="font-medium">
            {formatDate(period.checkInDate)} - {formatDate(period.checkOutDate)}
          </div>
          <div className="text-sm text-gray-600">{period.nightLength} nights</div>
        </div>
        <div className="text-lg font-semibold">
          {`${currencySymbol(currencyCode)}${period.totalPrice.toFixed(2)}`}
        </div>
        <div className="text-sm text-gray-600">{period.promoName}</div>
      </div>
    </a>
  );
};

export default Item;
