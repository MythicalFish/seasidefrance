import type { GetCalendarByUser200ResponseInner } from 'src/lib/lodgify-sdk';
import type { LodgifyApiRatesModelsV2RatePromotion } from 'src/lib/lodgify-sdk/models/LodgifyApiRatesModelsV2RatePromotion';

type AvailabilityObject = GetCalendarByUser200ResponseInner;
export type Availability = AvailabilityObject['periods'];

export type LodgifyPromotion = LodgifyApiRatesModelsV2RatePromotion;
