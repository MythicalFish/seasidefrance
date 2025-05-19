const apiKey = import.meta.env.LODGIFY_PUBLIC_KEY;
import lodgifyFetch from './data/lodgifyFetch';
const lodgifyProperties = await lodgifyFetch(apiKey || '');
import optimizedProperties from './data/optimizedInfo.json';

import type { Property } from './types';

const properties = optimizedProperties.map(property => {
  const lodgifyProperty = lodgifyProperties.find(p => p.id === property.id);
  return {
    ...property,
    lodgify: lodgifyProperty,
  };
}) as Property[];

export type { Property };

export default properties;
