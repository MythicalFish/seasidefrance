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
 * @interface LodgifyPublicApiInfrastructureModelsError
 */
export interface LodgifyPublicApiInfrastructureModelsError {
    /**
     * 
     * @type {string}
     * @memberof LodgifyPublicApiInfrastructureModelsError
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LodgifyPublicApiInfrastructureModelsError
     */
    code?: LodgifyPublicApiInfrastructureModelsErrorCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof LodgifyPublicApiInfrastructureModelsError
     */
    correlationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LodgifyPublicApiInfrastructureModelsError
     */
    eventId?: string | null;
}


/**
 * @export
 */
export const LodgifyPublicApiInfrastructureModelsErrorCodeEnum = {
    Unknown: 'Unknown',
    NoRateDefined: 'NoRateDefined',
    MinStayRequired: 'MinStayRequired',
    BookingStatusUnknown: 'BookingStatusUnknown',
    BookingMessageTypeNotAllowed: 'BookingMessageTypeNotAllowed',
    BookingNoRooms: 'BookingNoRooms',
    BookingCannotChangeStatus: 'BookingCannotChangeStatus',
    EnquiryAlreadyUpgraded: 'EnquiryAlreadyUpgraded',
    BookingPaymentNotValid: 'BookingPaymentNotValid',
    ArrivalNotValid: 'ArrivalNotValid',
    DepartureNotValid: 'DepartureNotValid',
    PropertyNotAvailable: 'PropertyNotAvailable',
    CaptchaInvalid: 'CaptchaInvalid',
    StripeError: 'StripeError',
    ValidationError: 'ValidationError',
    PaymentError: 'PaymentError',
    ArgumentError: 'ArgumentError',
    NotFound: 'NotFound',
    NotImplemented: 'NotImplemented',
    NotAuthorized: 'NotAuthorized'
} as const;
export type LodgifyPublicApiInfrastructureModelsErrorCodeEnum = typeof LodgifyPublicApiInfrastructureModelsErrorCodeEnum[keyof typeof LodgifyPublicApiInfrastructureModelsErrorCodeEnum];


/**
 * Check if a given object implements the LodgifyPublicApiInfrastructureModelsError interface.
 */
export function instanceOfLodgifyPublicApiInfrastructureModelsError(value: object): value is LodgifyPublicApiInfrastructureModelsError {
    return true;
}

export function LodgifyPublicApiInfrastructureModelsErrorFromJSON(json: any): LodgifyPublicApiInfrastructureModelsError {
    return LodgifyPublicApiInfrastructureModelsErrorFromJSONTyped(json, false);
}

export function LodgifyPublicApiInfrastructureModelsErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): LodgifyPublicApiInfrastructureModelsError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'code': json['code'] == null ? undefined : json['code'],
        'correlationId': json['correlation_id'] == null ? undefined : json['correlation_id'],
        'eventId': json['event_id'] == null ? undefined : json['event_id'],
    };
}

export function LodgifyPublicApiInfrastructureModelsErrorToJSON(json: any): LodgifyPublicApiInfrastructureModelsError {
    return LodgifyPublicApiInfrastructureModelsErrorToJSONTyped(json, false);
}

export function LodgifyPublicApiInfrastructureModelsErrorToJSONTyped(value?: LodgifyPublicApiInfrastructureModelsError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'code': value['code'],
        'correlation_id': value['correlationId'],
        'event_id': value['eventId'],
    };
}

