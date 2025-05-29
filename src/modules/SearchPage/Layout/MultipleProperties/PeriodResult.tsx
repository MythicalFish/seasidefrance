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
  <div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow mb-4">
    <div className="p-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Property Info with Thumbnail */}
        <div className="flex-1">
          <PropertyInfo property={property} period={period} resultIndex={resultIndex} />
        </div>

        {/* Date and Nights Info */}
        <div className="flex-shrink-0 lg:text-center">
          <div className="text-sm font-medium text-gray-900">{formatDate(period.checkInDate)}</div>
          <div className="text-sm font-medium text-gray-900">{formatDate(period.checkOutDate)}</div>
          <div className="text-xs text-gray-500 mt-1">
            {period.nightLength} night{period.nightLength !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex-shrink-0 text-right">
          <div className="flex items-center justify-end gap-2 mb-1">
            {period.discount > 0 && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                -{period.discount}%
              </span>
            )}
            <span className="text-lg font-semibold text-gray-900">
              {formatCurrency(period.pricePerNight)}
            </span>
            <span className="text-sm text-gray-500">/ night</span>
          </div>
          <div className="text-sm text-gray-600 mb-3">
            {formatCurrency(period.totalPrice)} total
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex-shrink-0">
          <div className="flex flex-col gap-2 lg:flex-col">
            <Button
              variant="primary"
              size="sm"
              href={getCheckoutUrl(property.lodgify.id, period.checkInDate, period.checkOutDate)}
              className="w-full lg:w-auto"
            >
              Book Now
            </Button>
            <Button
              variant="secondary"
              size="xs"
              href={`/${property.slug}#availability`}
              className="w-full lg:w-auto"
            >
              See all dates
            </Button>
          </div>
        </div>
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
  <a href={`/${property.slug}`} className="block group">
    <div className="flex gap-6 items-center">
      <div className="flex-shrink-0">
        <img
          src={`/thumbnails/${property.lodgify.id}.jpg`}
          alt={property.title || `Property ${resultIndex + 1}`}
          className="w-32 h-21 sm:w-40 sm:h-27 lg:w-48 lg:h-32 object-cover rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-200"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {property.title || `Property ${resultIndex + 1}`}
        </h3>
      </div>
    </div>
  </a>
);

export default PeriodResult;
