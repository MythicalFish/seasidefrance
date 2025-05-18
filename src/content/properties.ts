import * as lodgify from '../lib/lodgify-sdk';
import type { GetAllPropertiesAsync200ResponseItemsInner } from '../lib/lodgify-sdk';

export type Property = GetAllPropertiesAsync200ResponseItemsInner;

const config = new lodgify.Configuration({
  apiKey: import.meta.env.LODGIFY_PUBLIC_KEY,
});

let properties: Property[] = [];

const fetchProperties = async () => {
  if (properties.length > 0) return properties;
  console.log('🟢 fetchProperties');
  const api = new lodgify.PropertiesApi(config);
  try {
    const res = await api.getAllPropertiesAsync({
      includeCount: true,
      includeInOut: false,
      page: 1,
      size: 50,
    });
    if (res?.items) {
      properties = res.items as Property[];
      return res.items;
    }
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default (await fetchProperties()) as Property[];
