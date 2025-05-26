export interface LodgifyRatePrice {
  minStay?: number;
  maxStay?: number;
  pricePerDay?: object;
  pricePerAdditionalGuest?: object;
  additionalGuestsStartsFrom?: number;
}

export interface LodgifyRate {
  date?: string | null;
  isDefault?: boolean;
  prices?: Array<LodgifyRatePrice> | null;
}

export interface RateSettingsPrice {
  rateType?: string | null;
  amount?: object;
  percentage?: number | null;
}

export interface RateSettingsFeePrice {
  isVatExclusive?: boolean;
  vatPercentage?: number;
  rateType?: string | null;
  amount?: object;
  percentage?: number | null;
}

export interface RateSettingsFee {
  feeName?: string | null;
  feeType?: string | null;
  appliedForNights?: number | null;
  chargeType?: string | null;
  frequency?: string | null;
  price?: RateSettingsFeePrice;
}

export interface RateSettingsTax {
  taxName?: string | null;
  taxType?: string | null;
  chargeType?: string | null;
  frequency?: string | null;
  price?: RateSettingsPrice;
}

export interface RateSettingsPromotionBookingDates {
  lower?: string;
  upper?: string;
}

export interface RateSettingsPromotionCode {
  code?: string | null;
  isActive?: boolean;
}

export interface RateSettingsPromotion {
  name?: string | null;
  price?: RateSettingsPrice;
  earlyBookerDays?: number | null;
  lastMinuteDays?: number | null;
  minimumStayDays?: number | null;
  bookingDates?: Array<RateSettingsPromotionBookingDates> | null;
  stayDates?: Array<RateSettingsPromotionBookingDates> | null;
  codes?: Array<RateSettingsPromotionCode> | null;
}

export type RateSettingsBookability = 'InstantBooking' | 'BookingRequest' | 'EnquiryOnly';

export interface RateSettings {
  bookability?: RateSettingsBookability;
  checkInHour?: number | null;
  checkOutHour?: number | null;
  bookingWindowDays?: number;
  advanceNoticeDays?: number;
  advanceNoticeHours?: number | null;
  preparationTimeDays?: number;
  currencyCode?: string | null;
  vat?: number;
  isVatExclusive?: boolean;
  fees?: Array<RateSettingsFee> | null;
  taxes?: Array<RateSettingsTax> | null;
  promotions?: Array<RateSettingsPromotion> | null;
}

export interface RatesResponse {
  calendarItems?: Array<LodgifyRate> | null;
  rateSettings?: RateSettings;
}
