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


/**
 * Type of scheduled transaction
 * @export
 */
export const LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum = {
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
export type LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum = typeof LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum[keyof typeof LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum];


export function instanceOfLodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum(value: any): boolean {
    for (const key in LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum, key)) {
            if (LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum[key as keyof typeof LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnumFromJSON(json: any): LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum {
    return LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnumFromJSONTyped(json, false);
}

export function LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum {
    return json as LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum;
}

export function LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnumToJSON(value?: LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum | null): any {
    return value as any;
}

export function LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum {
    return value as LodgifyApiPublicReservationsModelsV2ReservationsQuotesScheduledTransactionTypeEnum;
}

