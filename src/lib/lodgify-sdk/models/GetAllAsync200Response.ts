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
import type { GetAllAsync200ResponseItemsInner } from './GetAllAsync200ResponseItemsInner';
import {
    GetAllAsync200ResponseItemsInnerFromJSON,
    GetAllAsync200ResponseItemsInnerFromJSONTyped,
    GetAllAsync200ResponseItemsInnerToJSON,
    GetAllAsync200ResponseItemsInnerToJSONTyped,
} from './GetAllAsync200ResponseItemsInner';

/**
 * 
 * @export
 * @interface GetAllAsync200Response
 */
export interface GetAllAsync200Response {
    /**
     * 
     * @type {number}
     * @memberof GetAllAsync200Response
     */
    count?: number | null;
    /**
     * 
     * @type {Array<GetAllAsync200ResponseItemsInner>}
     * @memberof GetAllAsync200Response
     */
    items?: Array<GetAllAsync200ResponseItemsInner> | null;
}

/**
 * Check if a given object implements the GetAllAsync200Response interface.
 */
export function instanceOfGetAllAsync200Response(value: object): value is GetAllAsync200Response {
    return true;
}

export function GetAllAsync200ResponseFromJSON(json: any): GetAllAsync200Response {
    return GetAllAsync200ResponseFromJSONTyped(json, false);
}

export function GetAllAsync200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllAsync200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(GetAllAsync200ResponseItemsInnerFromJSON)),
    };
}

export function GetAllAsync200ResponseToJSON(json: any): GetAllAsync200Response {
    return GetAllAsync200ResponseToJSONTyped(json, false);
}

export function GetAllAsync200ResponseToJSONTyped(value?: GetAllAsync200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'items': value['items'] == null ? undefined : ((value['items'] as Array<any>).map(GetAllAsync200ResponseItemsInnerToJSON)),
    };
}

