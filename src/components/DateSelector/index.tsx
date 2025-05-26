import { useEffect, useState } from 'react';
import type { RatesResponse } from '@data/fetchRates/types';
import type { AvailabilityPeriod } from '@data/fetchAvailability/types';
import { findAvailablePeriods } from './getPeriods';
import Item from './Item';
import SwiperSection from '@components/Swiper';

type Props = {
  rates: RatesResponse;
  availability: AvailabilityPeriod[];
  currencyCode?: string | null;
  propertyId: number;
  propertySlug: string;
  limit?: number;
  useSwiper?: boolean;
  grid?: boolean;
  showMore?: boolean;
  showSelector?: boolean;
};

const AvailablePeriods = ({
  rates,
  availability,
  currencyCode = 'EUR',
  propertyId,
  propertySlug,
  limit = 4,
  useSwiper = false,
  grid = false,
  showMore = false,
  showSelector = false,
}: Props) => {
  const [enableSwiper, setEnableSwiper] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [desiredStay, setDesiredStay] = useState(7);
  const periods = findAvailablePeriods(rates, availability, desiredStay, startDate)?.slice(
    0,
    limit
  );

  useEffect(() => {
    console.log('🟢🟢🟢 startDate', startDate);
  }, [startDate]);

  useEffect(() => {
    if (!useSwiper) return;
    setEnableSwiper(true);
  }, [useSwiper]);

  const items = periods.map((period, index) => (
    <Item
      key={propertyId + index}
      period={period}
      currencyCode={currencyCode || 'EUR'}
      propertyId={propertyId}
      propertySlug={propertySlug}
    />
  ));

  if (showMore) {
    items.push(<Item key="more" showMore propertyId={propertyId} propertySlug={propertySlug} />);
  }

  if (enableSwiper) {
    return (
      <div>
        <SwiperSection>{items}</SwiperSection>
      </div>
    );
  }

  if (grid) {
    return (
      <div>
        {showSelector && (
          <div className="flex  items-center mb-4">
            <button
              onClick={() => setStartDate((date) => new Date(date.setDate(date.getDate() + 1)))}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              <i className="codicon codicon-chevron-right" />
            </button>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-4">{items}</div>
      </div>
    );
  }

  return <div className="flex flex-col gap-4">{items}</div>;
};

export default AvailablePeriods;
