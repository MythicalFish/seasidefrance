export interface LodgifyRate {
  propertyId: number;
  roomTypeId: number;
  date: string;
  isDefault: boolean;
  prices: Array<{
    currency: string;
    amount: number;
    minStay?: number;
    maxStay?: number;
    pricePerDay?: Record<string, number>;
    pricePerAdditionalGuest?: Record<string, number>;
    additionalGuestsStartsFrom?: number;
  }>;
  rateSettings: {
    bookability: 'InstantBooking' | 'BookingRequest' | 'EnquiryOnly';
    checkInHour?: number;
    checkOutHour?: number;
    bookingWindowDays?: number;
    advanceNoticeDays?: number;
    currencyCode: string;
    vat?: number;
    isVatExclusive?: boolean;
  };
}

export interface RatesResponse {
  items: LodgifyRate[];
  total: number;
}
