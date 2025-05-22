import { useEffect, useState } from 'react';
import type { RatesResponse } from '../../data/fetchRates/types';
import type { Availability } from '../../data/fetchAvailability/types';
import { findAvailablePeriods } from './getPeriods';
import Item from './Item';
import SwiperSection from '../Swiper';

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
    return <SwiperSection>{items}</SwiperSection>;
  }
  return <div className={grid ? 'grid grid-cols-2 gap-4' : 'flex gap-4'}>{items}</div>;
};

export default AvailablePeriods;
