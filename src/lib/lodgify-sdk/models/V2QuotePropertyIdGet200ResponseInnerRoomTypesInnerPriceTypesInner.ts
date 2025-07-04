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
import type { V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInner } from './V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInner';
import {
    V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInnerFromJSON,
    V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInnerFromJSONTyped,
    V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInnerToJSON,
    V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInnerToJSONTyped,
} from './V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInner';

/**
 * 
 * @export
 * @interface V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner
 */
export interface V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner {
    /**
     * 
     * @type {string}
     * @memberof V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner
     */
    type?: V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner
     */
    isNegative?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner
     */
    description?: string | null;
    /**
     * 
     * @type {Array<V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInner>}
     * @memberof V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner
     */
    prices?: Array<V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInner> | null;
    /**
     * 
     * @type {number}
     * @memberof V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner
     */
    subtotal?: number;
}


/**
 * @export
 */
export const V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerTypeEnum = {
    RoomRate: 'RoomRate',
    Promotion: 'Promotion',
    Fee: 'Fee',
    AddOn: 'AddOn',
    Tax: 'Tax',
    Other: 'Other'
} as const;
export type V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerTypeEnum = typeof V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerTypeEnum[keyof typeof V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerTypeEnum];


/**
 * Check if a given object implements the V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner interface.
 */
export function instanceOfV2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner(value: object): value is V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner {
    return true;
}

export function V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerFromJSON(json: any): V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner {
    return V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerFromJSONTyped(json, false);
}

export function V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'isNegative': json['is_negative'] == null ? undefined : json['is_negative'],
        'description': json['description'] == null ? undefined : json['description'],
        'prices': json['prices'] == null ? undefined : ((json['prices'] as Array<any>).map(V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInnerFromJSON)),
        'subtotal': json['subtotal'] == null ? undefined : json['subtotal'],
    };
}

export function V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerToJSON(json: any): V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner {
    return V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerToJSONTyped(json, false);
}

export function V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerToJSONTyped(value?: V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'is_negative': value['isNegative'],
        'description': value['description'],
        'prices': value['prices'] == null ? undefined : ((value['prices'] as Array<any>).map(V2QuotePropertyIdGet200ResponseInnerRoomTypesInnerPriceTypesInnerPricesInnerToJSON)),
        'subtotal': value['subtotal'],
    };
}

