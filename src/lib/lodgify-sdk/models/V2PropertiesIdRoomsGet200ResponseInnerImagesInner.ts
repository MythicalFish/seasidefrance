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
 * @interface V2PropertiesIdRoomsGet200ResponseInnerImagesInner
 */
export interface V2PropertiesIdRoomsGet200ResponseInnerImagesInner {
    /**
     * 
     * @type {string}
     * @memberof V2PropertiesIdRoomsGet200ResponseInnerImagesInner
     */
    text?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V2PropertiesIdRoomsGet200ResponseInnerImagesInner
     */
    url?: string | null;
}

/**
 * Check if a given object implements the V2PropertiesIdRoomsGet200ResponseInnerImagesInner interface.
 */
export function instanceOfV2PropertiesIdRoomsGet200ResponseInnerImagesInner(value: object): value is V2PropertiesIdRoomsGet200ResponseInnerImagesInner {
    return true;
}

export function V2PropertiesIdRoomsGet200ResponseInnerImagesInnerFromJSON(json: any): V2PropertiesIdRoomsGet200ResponseInnerImagesInner {
    return V2PropertiesIdRoomsGet200ResponseInnerImagesInnerFromJSONTyped(json, false);
}

export function V2PropertiesIdRoomsGet200ResponseInnerImagesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PropertiesIdRoomsGet200ResponseInnerImagesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'text': json['text'] == null ? undefined : json['text'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function V2PropertiesIdRoomsGet200ResponseInnerImagesInnerToJSON(json: any): V2PropertiesIdRoomsGet200ResponseInnerImagesInner {
    return V2PropertiesIdRoomsGet200ResponseInnerImagesInnerToJSONTyped(json, false);
}

export function V2PropertiesIdRoomsGet200ResponseInnerImagesInnerToJSONTyped(value?: V2PropertiesIdRoomsGet200ResponseInnerImagesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'text': value['text'],
        'url': value['url'],
    };
}

