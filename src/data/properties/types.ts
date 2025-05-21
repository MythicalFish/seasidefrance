import type { GetAllPropertiesAsync200ResponseItemsInner } from 'src/lib/lodgify-sdk';
import type { LodgifyAvailability } from '../availability/types';
import type { LodgifyRate, RatesResponse } from '../rates/types';

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
  lodgify: LodgifyProperty;
  availability: LodgifyAvailability[];
  rates: RatesResponse[];
};
