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
import type { V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner } from './V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner';
import {
    V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerFromJSON,
    V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerFromJSONTyped,
    V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerToJSON,
    V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerToJSONTyped,
} from './V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner';

/**
 * Object to hold a message details within a thread
 * @export
 * @interface V2MessagingThreadGuidGet200ResponseInnerMessagesInner
 */
export interface V2MessagingThreadGuidGet200ResponseInnerMessagesInner {
    /**
     * Message Id
     * @type {number}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    id?: number;
    /**
     * Message subject
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    subject?: string | null;
    /**
     * Message body (You can expect HTML content)
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    message?: string | null;
    /**
     * Message type: Owner, Renter
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    type?: string | null;
    /**
     * Creation date of the message
     * @type {Date}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    dateCreated?: Date;
    /**
     * List of attachments in the message
     * @type {Array<V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner>}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    attachments?: Array<V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInner> | null;
    /**
     * Message status: Submitted, Sent, Delivered, Failed
     * @type {string}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    messageStatus?: string | null;
    /**
     * Read status of the message
     * @type {boolean}
     * @memberof V2MessagingThreadGuidGet200ResponseInnerMessagesInner
     */
    isRead?: boolean;
}

/**
 * Check if a given object implements the V2MessagingThreadGuidGet200ResponseInnerMessagesInner interface.
 */
export function instanceOfV2MessagingThreadGuidGet200ResponseInnerMessagesInner(value: object): value is V2MessagingThreadGuidGet200ResponseInnerMessagesInner {
    return true;
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerFromJSON(json: any): V2MessagingThreadGuidGet200ResponseInnerMessagesInner {
    return V2MessagingThreadGuidGet200ResponseInnerMessagesInnerFromJSONTyped(json, false);
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MessagingThreadGuidGet200ResponseInnerMessagesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'subject': json['subject'] == null ? undefined : json['subject'],
        'message': json['message'] == null ? undefined : json['message'],
        'type': json['type'] == null ? undefined : json['type'],
        'dateCreated': json['date_created'] == null ? undefined : (new Date(json['date_created'])),
        'attachments': json['attachments'] == null ? undefined : ((json['attachments'] as Array<any>).map(V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerFromJSON)),
        'messageStatus': json['message_status'] == null ? undefined : json['message_status'],
        'isRead': json['is_read'] == null ? undefined : json['is_read'],
    };
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerToJSON(json: any): V2MessagingThreadGuidGet200ResponseInnerMessagesInner {
    return V2MessagingThreadGuidGet200ResponseInnerMessagesInnerToJSONTyped(json, false);
}

export function V2MessagingThreadGuidGet200ResponseInnerMessagesInnerToJSONTyped(value?: V2MessagingThreadGuidGet200ResponseInnerMessagesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'subject': value['subject'],
        'message': value['message'],
        'type': value['type'],
        'date_created': value['dateCreated'] == null ? undefined : ((value['dateCreated']).toISOString()),
        'attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(V2MessagingThreadGuidGet200ResponseInnerMessagesInnerAttachmentsInnerToJSON)),
        'message_status': value['messageStatus'],
        'is_read': value['isRead'],
    };
}

