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
 * @interface LodgifyApiPropertiesModelsV2DescribedImageDto
 */
export interface LodgifyApiPropertiesModelsV2DescribedImageDto {
    /**
     * 
     * @type {string}
     * @memberof LodgifyApiPropertiesModelsV2DescribedImageDto
     */
    text?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LodgifyApiPropertiesModelsV2DescribedImageDto
     */
    url?: string | null;
}

/**
 * Check if a given object implements the LodgifyApiPropertiesModelsV2DescribedImageDto interface.
 */
export function instanceOfLodgifyApiPropertiesModelsV2DescribedImageDto(value: object): value is LodgifyApiPropertiesModelsV2DescribedImageDto {
    return true;
}

export function LodgifyApiPropertiesModelsV2DescribedImageDtoFromJSON(json: any): LodgifyApiPropertiesModelsV2DescribedImageDto {
    return LodgifyApiPropertiesModelsV2DescribedImageDtoFromJSONTyped(json, false);
}

export function LodgifyApiPropertiesModelsV2DescribedImageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LodgifyApiPropertiesModelsV2DescribedImageDto {
    if (json == null) {
        return json;
    }
    return {
        
        'text': json['text'] == null ? undefined : json['text'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function LodgifyApiPropertiesModelsV2DescribedImageDtoToJSON(json: any): LodgifyApiPropertiesModelsV2DescribedImageDto {
    return LodgifyApiPropertiesModelsV2DescribedImageDtoToJSONTyped(json, false);
}

export function LodgifyApiPropertiesModelsV2DescribedImageDtoToJSONTyped(value?: LodgifyApiPropertiesModelsV2DescribedImageDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'text': value['text'],
        'url': value['url'],
    };
}

