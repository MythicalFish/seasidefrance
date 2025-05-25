import { formatDate } from 'src/lib/date';
import { currencySymbol, getCheckoutUrl } from 'src/lib/utils';
import type { AvailablePeriod } from './getPeriods';
import headerBg from '../../images/bg.png';

type Props = {
  period: AvailablePeriod;
  currencyCode: string;
  propertyId: number;
};

const Item = ({ period, currencyCode, propertyId }: Props) => {
  return (
    <a
      className="block bg-blue-500 text-white px-4 py-2 rounded-lg shadow min-w-[240px]"
      style={{
        backgroundImage: `url(${headerBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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
