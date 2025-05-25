import { useEffect, useState } from 'react';
import type { RatesResponse } from '@data/fetchRates/types';
import type { Availability } from '@data/fetchAvailability/types';
import { findAvailablePeriods } from './getPeriods';
import Item from './Item';
import SwiperSection from '@components/Swiper';
import BookingWidget from '@components/BookingWidget';

type Props = {
  rates: RatesResponse;
  availability: Availability;
  currencyCode?: string | null;
  propertyId: number;
  limit?: number;
  useSwiper?: boolean;
  grid?: boolean;
};

const AvailablePeriods = ({
  rates,
  availability,
  currencyCode = 'EUR',
  propertyId,
  limit = 4,
  useSwiper = false,
  grid = false,
}: Props) => {
  const [enableSwiper, setEnableSwiper] = useState(false);
  const [desiredStay, setDesiredStay] = useState(7);
  const periods = findAvailablePeriods(rates, availability, desiredStay)?.slice(0, limit);

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
    />
  ));

  if (enableSwiper) {
    return (
      <div>
        <SwiperSection>{items}</SwiperSection>
        <div className="mt-4">
          <BookingWidget propertyId={propertyId} />
        </div>
      </div>
    );
  }

  if (grid) {
    return (
      <div>
        <div className="grid md:grid-cols-2 gap-4">{items}</div>
        <div className="mt-4">
          <BookingWidget propertyId={propertyId} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {items}
      <div className="mt-4">
        <BookingWidget propertyId={propertyId} />
      </div>
    </div>
  );
};

export default AvailablePeriods;
