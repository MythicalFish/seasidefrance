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
 * Transaction scheduled in the Quote
 * @export
 * @interface GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner
 */
export interface GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner {
    /**
     * Id of the scheduled item
     * @type {number}
     * @memberof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner
     */
    id?: number;
    /**
     * Type of scheduled transaction
     * @type {string}
     * @memberof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner
     */
    type?: GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerTypeEnum;
    /**
     * Status of a scheduled transaction
     * @type {string}
     * @memberof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner
     */
    status?: GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerStatusEnum;
    /**
     * 
     * @type {object}
     * @memberof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner
     */
    amount?: object;
    /**
     * The date the schedule item will be due at. 
     * Null means that the date will be the date of the booking agreement.
     * @type {string}
     * @memberof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner
     */
    dueAt?: string | null;
}


/**
 * @export
 */
export const GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerTypeEnum = {
    PrePayment: 'PrePayment',
    InterimPayment: 'InterimPayment',
    BalancePayment: 'BalancePayment',
    PrecedingPayment: 'PrecedingPayment',
    Cancellation: 'Cancellation',
    DamageDepositAuthorization: 'DamageDepositAuthorization',
    DamageDepositVoid: 'DamageDepositVoid',
    SecurityDepositCharge: 'SecurityDepositCharge',
    SecurityDepositRefund: 'SecurityDepositRefund'
} as const;
export type GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerTypeEnum = typeof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerTypeEnum[keyof typeof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerTypeEnum];

/**
 * @export
 */
export const GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerStatusEnum = {
    Scheduled: 'Scheduled',
    Overdue: 'Overdue',
    Pending: 'Pending',
    Aborted: 'Aborted',
    Paid: 'Paid',
    Refunded: 'Refunded',
    Authorized: 'Authorized',
    Voided: 'Voided',
    Captured: 'Captured',
    Shown: 'Shown'
} as const;
export type GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerStatusEnum = typeof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerStatusEnum[keyof typeof GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerStatusEnum];


/**
 * Check if a given object implements the GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner interface.
 */
export function instanceOfGetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner(value: object): value is GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner {
    return true;
}

export function GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerFromJSON(json: any): GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner {
    return GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerFromJSONTyped(json, false);
}

export function GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'status': json['status'] == null ? undefined : json['status'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'dueAt': json['due_at'] == null ? undefined : json['due_at'],
    };
}

export function GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerToJSON(json: any): GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner {
    return GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerToJSONTyped(json, false);
}

export function GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInnerToJSONTyped(value?: GetAllAsync200ResponseItemsInnerQuoteScheduledTransactionsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'status': value['status'],
        'amount': value['amount'],
        'due_at': value['dueAt'],
    };
}

