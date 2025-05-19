import type { GetAllPropertiesAsync200ResponseItemsInner } from 'src/lib/lodgify-sdk';

export type LodgifyProperty = GetAllPropertiesAsync200ResponseItemsInner;

export type Property = {
  id: number;
  name: string;
  slug: string;
  title: string;
  intro: string;
  description: string;
  features: string[];
  lodgify: LodgifyProperty;
};
