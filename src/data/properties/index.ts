import propertyPages from '@fixtures/property-pages.json';
import propertyInfo from '@fixtures/properties.json';
import roomInfos from '@fixtures/roomInfo.json';
import fetchAvailability from '../fetchAvailability';
import fetchRates from '../fetchRates';
import fetchRestrictions from '../fetchRestrictions';
import type { PropertyPage, LodgifyProperty } from './types';

const currentDate = new Date();
const currentDateStr = currentDate.toISOString().split('T')[0];
const oneYearFromNow = new Date(currentDate);
oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);
const oneYearFromNowStr = oneYearFromNow.toISOString().split('T')[0];

const fullPropertyPages = (await Promise.all(
  propertyPages.map(async (property) => {
    const lodgify = propertyInfo.find((p) => p.id === property.id) as unknown as LodgifyProperty;

    const idString = String(property.id);
    const allRoomInfo = roomInfos[idString as keyof typeof roomInfos];
    const roomInfo = Array.isArray(allRoomInfo) && allRoomInfo.length > 0 ? allRoomInfo[0] : null;

    const availability = await fetchAvailability(property.id, currentDateStr, oneYearFromNowStr);
    const rates = await fetchRates(
      property.id,
      roomInfo?.id || 0,
      currentDateStr,
      oneYearFromNowStr
    );

    const restrictions = await fetchRestrictions(property.id);

    return {
      ...property,
      lodgify,
      availability,
      rates,
      restrictions,
      roomInfo,
    };
  })
)) as PropertyPage[];

export default fullPropertyPages;
