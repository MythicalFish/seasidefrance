type PeriodBooking = {
  id?: number;
  status?: string;
};

type ClosedPeriod = {
  id?: number;
};

export interface AvailabilityPeriod {
  start?: string;
  end?: string;
  available?: number;
  closedPeriod?: ClosedPeriod;
  bookings?: PeriodBooking[];
  channelCalendars?: ClosedPeriod[];
}

export interface Availability {
  userId?: number;
  propertyId?: number;
  roomTypeId?: number;
  periods?: AvailabilityPeriod[];
}

export interface PromotionPrice {
  rateType?: string;
  amount?: object;
  percentage?: number;
}

export interface PromotionBookingDates {
  lower?: string;
  upper?: string;
}

export interface PromotionCode {
  code?: string;
  isActive?: boolean;
}

export interface Promotion {
  name?: string;
  price?: PromotionPrice;
  earlyBookerDays?: number;
  lastMinuteDays?: number;
  minimumStayDays?: number;
  bookingDates?: PromotionBookingDates[];
  stayDates?: PromotionBookingDates[];
  codes?: PromotionCode[];
}
