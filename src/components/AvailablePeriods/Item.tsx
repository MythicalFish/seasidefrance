import { formatDate } from 'src/lib/date';
import { currencySymbol, getCheckoutUrl } from 'src/lib/utils';
import type { AvailablePeriod } from './getPeriods';

type Props = {
  period: AvailablePeriod;
  currencyCode: string;
  propertyId: number;
};

const Item = ({ period, currencyCode, propertyId }: Props) => {
  return (
    <a
      className="block bg-white p-4 rounded-lg shadow min-w-[240px]"
      href={getCheckoutUrl(propertyId, period.checkInDate, period.checkOutDate)}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="font-medium">
            {formatDate(period.checkInDate)} - {formatDate(period.checkOutDate)}
          </div>
          <div className="text-sm text-gray-600">{period.nightLength} nights</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-lg font-semibold leading-none">
            {`${currencySymbol(currencyCode)}${period.pricePerNight.toFixed(2)}`}
          </div>
          <div className="text-xs text-gray-500">per night</div>
        </div>
      </div>
    </a>
  );
};

export default Item;
