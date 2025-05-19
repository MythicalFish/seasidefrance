import type {
  RatesCalendarV2200ResponseCalendarItemsInner,
  RatesCalendarV2200ResponseRateSettings,
} from 'src/lib/lodgify-sdk';

export type LodgifyRate = RatesCalendarV2200ResponseCalendarItemsInner;

export interface RatesResponse {
  calendarItems: LodgifyRate[];
  rateSettings: RatesCalendarV2200ResponseRateSettings;
}
