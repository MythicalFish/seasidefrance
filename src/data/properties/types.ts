import type { GetAllPropertiesAsync200ResponseItemsInner } from 'src/lib/lodgify-sdk';
import type { Availability } from '../fetchAvailability/types';
import type { LodgifyRate, RatesResponse } from '../fetchRates/types';

export type LodgifyProperty = GetAllPropertiesAsync200ResponseItemsInner;

export type Rates = { roomTypeId: number; data: LodgifyRate[] }[];

export type PropertyPage = {
  id: number;
  name: string;
  slug: string;
  title: string;
  intro: string;
  description: string;
  features: string[];
  highlights: string[];
  lodgify: LodgifyProperty;
  availability: Availability;
  rates: RatesResponse;
  roomInfo: any;
};
