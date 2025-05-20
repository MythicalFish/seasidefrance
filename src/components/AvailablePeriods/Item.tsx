import { formatDate } from 'src/lib/date';
import { currencySymbol, getCheckoutUrl } from 'src/lib/utils';
import type { AvailablePeriod } from './getPeriods';

type Props = {
  period: AvailablePeriod;
  currencyCode: string;
  propertyId: string;
};

const Item = ({ period, currencyCode, propertyId }: Props) => {
  return (
    <a
      className="block bg-white p-4 rounded-lg shadow"
      href={getCheckoutUrl(propertyId, period.startDate, period.endDate)}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="font-medium">
            {formatDate(period.startDate)} - {formatDate(period.endDate)}
          </div>
          <div className="text-sm text-gray-600">{period.nights} nights</div>
        </div>
        <div className="text-lg font-semibold">
          {`${currencySymbol(currencyCode)}${period.totalPrice.toFixed(2)}`}
        </div>
      </div>
    </a>
  );
};

export default Item;
