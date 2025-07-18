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
 * Details of a message attachment
 * @export
 * @interface V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner
 */
export interface V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner {
    /**
     * Attachment's file name
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner
     */
    fileName?: string | null;
    /**
     * Length of the attachment in bytes
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner
     */
    contentLength?: string | null;
    /**
     * Attachment's content type (e.g. text/plain, application/pdf, image/jpeg)
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner
     */
    contentType?: string | null;
    /**
     * Attachment's file url to download
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner
     */
    fileUrl?: string | null;
}

/**
 * Check if a given object implements the V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner interface.
 */
export function instanceOfV2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner(value: object): value is V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner {
    return true;
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerFromJSON(json: any): V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner {
    return V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerFromJSONTyped(json, false);
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'fileName': json['file_name'] == null ? undefined : json['file_name'],
        'contentLength': json['content_length'] == null ? undefined : json['content_length'],
        'contentType': json['content_type'] == null ? undefined : json['content_type'],
        'fileUrl': json['file_url'] == null ? undefined : json['file_url'],
    };
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerToJSON(json: any): V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner {
    return V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerToJSONTyped(json, false);
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerToJSONTyped(value?: V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'file_name': value['fileName'],
        'content_length': value['contentLength'],
        'content_type': value['contentType'],
        'file_url': value['fileUrl'],
    };
}

