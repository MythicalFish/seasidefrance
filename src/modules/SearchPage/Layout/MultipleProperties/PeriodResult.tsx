import type { PropertyPage } from '@data/properties/types';
import type { AvailablePeriod } from '@components/DateSelector/getPeriods';
import { formatDate, formatCurrency } from '@lib/date';
import { getCheckoutUrl } from '@lib/utils';
import Button from '@components/Button';

type Props = {
  property: PropertyPage;
  period: AvailablePeriod;
  resultIndex: number;
};

const PeriodResult = ({ property, period, resultIndex }: Props) => (
  <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
      <PropertyInfo property={property} period={period} resultIndex={resultIndex} />

      <div className="text-sm">
        {`${formatDate(period.checkInDate)} - ${formatDate(period.checkOutDate)}`}
        <div className="text-gray-500 text-xs mt-1">{period.nightLength} nights</div>
      </div>

      <div className="text-right">
        <div>
          {period.discount > 0 && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-2">
              -{period.discount}%
            </span>
          )}
          <span className="text-xl font-medium">{formatCurrency(period.pricePerNight)}</span>
        </div>
        <div>
          <span className="opacity-50">{formatCurrency(period.totalPrice)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-end">
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
  <a href={`/${property.slug}`} className="block">
    <h3 className="font-semibold text-lg mb-2">{property.name || `Property ${resultIndex + 1}`}</h3>
    <Button variant="secondary" size="xs">
      More info
    </Button>
  </a>
);

export default PeriodResult;
