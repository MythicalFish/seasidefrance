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
 * @interface LodgifyApiPropertiesModelsV2RoomSummaryDto
 */
export interface LodgifyApiPropertiesModelsV2RoomSummaryDto {
    /**
     * Identifier of the roomtype
     * @type {number}
     * @memberof LodgifyApiPropertiesModelsV2RoomSummaryDto
     */
    id?: number;
    /**
     * Name of the roomtype
     * @type {string}
     * @memberof LodgifyApiPropertiesModelsV2RoomSummaryDto
     */
    name?: string | null;
}

/**
 * Check if a given object implements the LodgifyApiPropertiesModelsV2RoomSummaryDto interface.
 */
export function instanceOfLodgifyApiPropertiesModelsV2RoomSummaryDto(value: object): value is LodgifyApiPropertiesModelsV2RoomSummaryDto {
    return true;
}

export function LodgifyApiPropertiesModelsV2RoomSummaryDtoFromJSON(json: any): LodgifyApiPropertiesModelsV2RoomSummaryDto {
    return LodgifyApiPropertiesModelsV2RoomSummaryDtoFromJSONTyped(json, false);
}

export function LodgifyApiPropertiesModelsV2RoomSummaryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LodgifyApiPropertiesModelsV2RoomSummaryDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function LodgifyApiPropertiesModelsV2RoomSummaryDtoToJSON(json: any): LodgifyApiPropertiesModelsV2RoomSummaryDto {
    return LodgifyApiPropertiesModelsV2RoomSummaryDtoToJSONTyped(json, false);
}

export function LodgifyApiPropertiesModelsV2RoomSummaryDtoToJSONTyped(value?: LodgifyApiPropertiesModelsV2RoomSummaryDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

