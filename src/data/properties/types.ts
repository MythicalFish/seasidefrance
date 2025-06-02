import type { AvailabilityPeriod } from '../fetchAvailability/types';
import type { LodgifyRate, RatesResponse } from '../fetchRates/types';

export interface PropertyContact {
  spokenLanguages?: Array<string> | null;
}

export interface PropertyRoom {
  id?: number;
  name?: string | null;
}

export interface PropertyInOutCheckInItem {
  date?: Date;
  _for?: string | null;
}

export interface PropertyInOut {
  isRestricted?: boolean;
  checkIn?: Array<PropertyInOutCheckInItem> | null;
  checkOut?: Array<PropertyInOutCheckInItem> | null;
  notAvailable?: Array<PropertyInOutCheckInItem> | null;
}

export interface LodgifyProperty {
  id?: number;
  name?: string | null;
  internalName?: string | null;
  description?: string | null;
  latitude?: number;
  longitude?: number;
  address?: string | null;
  hideAddress?: boolean;
  zip?: string | null;
  city?: string | null;
  state?: string | null;
  countryCode?: string | null;
  country?: string | null;
  imageUrl?: string | null;
  hasAddons?: boolean;
  hasAgreement?: boolean;
  agreementText?: string | null;
  agreementUrl?: string | null;
  contact?: PropertyContact;
  rating?: number;
  priceUnitInDays?: number;
  minPrice?: number;
  originalMinPrice?: number;
  maxPrice?: number;
  originalMaxPrice?: number;
  rooms?: Array<PropertyRoom> | null;
  inOutMaxDate?: Date;
  inOut?: PropertyInOut;
  currencyCode?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  subscriptionPlans?: Array<string> | null;
}

export type Rates = { roomTypeId: number; data: LodgifyRate[] }[];

export type PropertyPage = {
  id: number;
  name: string;
  slug: string;
  title: string;
  intro: string;
  description: string;
  features: string[];
  lodgify: LodgifyProperty;
  availability: AvailabilityPeriod[];
  rates: RatesResponse;
  roomInfo: any;
};
