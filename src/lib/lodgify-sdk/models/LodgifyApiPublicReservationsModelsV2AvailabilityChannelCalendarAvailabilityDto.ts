/* tslint:disable */
/* eslint-disable */
/**
 * Lodgify Public API v2
 * API documentation for Lodgify Public API v2
 *
 * The version of the OpenAPI document: v2
 * Contact: development@lodgify.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto
 */
export interface LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto {
    /**
     * 
     * @type {number}
     * @memberof LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto
     */
    id?: number;
}

/**
 * Check if a given object implements the LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto interface.
 */
export function instanceOfLodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto(value: object): value is LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto {
    return true;
}

export function LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDtoFromJSON(json: any): LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto {
    return LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDtoFromJSONTyped(json, false);
}

export function LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDtoToJSON(json: any): LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto {
    return LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDtoToJSONTyped(json, false);
}

export function LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDtoToJSONTyped(value?: LodgifyApiPublicReservationsModelsV2AvailabilityChannelCalendarAvailabilityDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}

