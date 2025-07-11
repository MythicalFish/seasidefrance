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
 * @interface GetAllPropertiesAsync200ResponseItemsInnerRoomsInner
 */
export interface GetAllPropertiesAsync200ResponseItemsInnerRoomsInner {
    /**
     * Identifier of the roomtype
     * @type {number}
     * @memberof GetAllPropertiesAsync200ResponseItemsInnerRoomsInner
     */
    id?: number;
    /**
     * Name of the roomtype
     * @type {string}
     * @memberof GetAllPropertiesAsync200ResponseItemsInnerRoomsInner
     */
    name?: string | null;
}

/**
 * Check if a given object implements the GetAllPropertiesAsync200ResponseItemsInnerRoomsInner interface.
 */
export function instanceOfGetAllPropertiesAsync200ResponseItemsInnerRoomsInner(value: object): value is GetAllPropertiesAsync200ResponseItemsInnerRoomsInner {
    return true;
}

export function GetAllPropertiesAsync200ResponseItemsInnerRoomsInnerFromJSON(json: any): GetAllPropertiesAsync200ResponseItemsInnerRoomsInner {
    return GetAllPropertiesAsync200ResponseItemsInnerRoomsInnerFromJSONTyped(json, false);
}

export function GetAllPropertiesAsync200ResponseItemsInnerRoomsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllPropertiesAsync200ResponseItemsInnerRoomsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function GetAllPropertiesAsync200ResponseItemsInnerRoomsInnerToJSON(json: any): GetAllPropertiesAsync200ResponseItemsInnerRoomsInner {
    return GetAllPropertiesAsync200ResponseItemsInnerRoomsInnerToJSONTyped(json, false);
}

export function GetAllPropertiesAsync200ResponseItemsInnerRoomsInnerToJSONTyped(value?: GetAllPropertiesAsync200ResponseItemsInnerRoomsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

