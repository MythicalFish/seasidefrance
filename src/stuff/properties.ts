console.log("🉑", import.meta.env.LODGIFY_PUBLIC_KEY);
import * as lodgify from "../lodgify-sdk/index";
const config = new lodgify.Configuration({
  apiKey: import.meta.env.LODGIFY_PUBLIC_KEY,
});

import type { Property, Room } from "../types/lodgify";
export type { Property, Room };

let properties: Property[] = [];

const fetchProperties = async () => {
  console.log("🟢 fetchProperties");
  const api = new lodgify.PropertiesApi(config);
  console.log("🟢 api", api);
  try {
    const fetched = await api.getAllPropertiesAsync({
      includeCount: true,
      includeInOut: true,
      page: 1,
      size: 50,
    });
    return fetched;
  } catch (error) {
    console.error(error);
    return {};
  }
};

// console.log("🟢", fetched);

// if (Array.isArray(fetched)) {
//   if (fetched[0]?.rooms?.length) {
//     properties = fetched;
//   }
// }

export { fetchProperties };

const res = await fetchProperties();

export default res?.items || [];
