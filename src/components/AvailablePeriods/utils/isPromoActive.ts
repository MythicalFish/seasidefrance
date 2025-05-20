import type { PromoInfo } from './getPromotions';

const isPromoActive = (promo: PromoInfo) => {
  if (!promo.bookingDates.length) return true;
  const currentDate = new Date();
  const currentDateStr = currentDate.toISOString().split('T')[0];
  let isActive = false;
  for (const dateRange of promo.bookingDates) {
    if (dateRange.includes(currentDateStr)) {
      isActive = true;
      break;
    }
  }
  if (isActive) console.log('🟢🟢🟢', promo.name, isActive);
  return isActive;
};

export default isPromoActive;
