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
 * Policy information related to the Booking
 * @export
 * @interface GetAllAsync200ResponseItemsInnerQuotePolicy
 */
export interface GetAllAsync200ResponseItemsInnerQuotePolicy {
    /**
     * Name of the policy
     * @type {string}
     * @memberof GetAllAsync200ResponseItemsInnerQuotePolicy
     */
    name?: string | null;
    /**
     * Description of the payment policy
     * @type {string}
     * @memberof GetAllAsync200ResponseItemsInnerQuotePolicy
     */
    payments?: string | null;
    /**
     * Description of the cancellation policy
     * @type {string}
     * @memberof GetAllAsync200ResponseItemsInnerQuotePolicy
     */
    cancellation?: string | null;
    /**
     * Description of the damage deposit policy
     * @type {string}
     * @memberof GetAllAsync200ResponseItemsInnerQuotePolicy
     */
    damageDeposit?: string | null;
}

/**
 * Check if a given object implements the GetAllAsync200ResponseItemsInnerQuotePolicy interface.
 */
export function instanceOfGetAllAsync200ResponseItemsInnerQuotePolicy(value: object): value is GetAllAsync200ResponseItemsInnerQuotePolicy {
    return true;
}

export function GetAllAsync200ResponseItemsInnerQuotePolicyFromJSON(json: any): GetAllAsync200ResponseItemsInnerQuotePolicy {
    return GetAllAsync200ResponseItemsInnerQuotePolicyFromJSONTyped(json, false);
}

export function GetAllAsync200ResponseItemsInnerQuotePolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllAsync200ResponseItemsInnerQuotePolicy {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'payments': json['payments'] == null ? undefined : json['payments'],
        'cancellation': json['cancellation'] == null ? undefined : json['cancellation'],
        'damageDeposit': json['damage_deposit'] == null ? undefined : json['damage_deposit'],
    };
}

export function GetAllAsync200ResponseItemsInnerQuotePolicyToJSON(json: any): GetAllAsync200ResponseItemsInnerQuotePolicy {
    return GetAllAsync200ResponseItemsInnerQuotePolicyToJSONTyped(json, false);
}

export function GetAllAsync200ResponseItemsInnerQuotePolicyToJSONTyped(value?: GetAllAsync200ResponseItemsInnerQuotePolicy | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'payments': value['payments'],
        'cancellation': value['cancellation'],
        'damage_deposit': value['damageDeposit'],
    };
}

