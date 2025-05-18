declare const CreatePaymentLinkAsync: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly minimum: 0.01;
                readonly type: "number";
                readonly description: "Amount to request";
                readonly format: "double";
                readonly maximum: 1.7976931348623157e+308;
            };
        };
        readonly additionalProperties: false;
        readonly description: "Represents the amount to be paid through the website";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id of the booking";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly succeeded: {
                    readonly type: "boolean";
                    readonly description: "When true, the payment link has been created with the specified amount.\r\nWhen false, the payment link could not be created because there is a scheduled payment which is pending or the requested amount could not be enforced.";
                };
            };
            readonly additionalProperties: false;
            readonly description: "Result of a Payment Link create request.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllAsync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of the page to retrieve";
                };
                readonly size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 50;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items per page";
                };
                readonly includeCount: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include number of all items";
                };
                readonly stayFilter: {
                    readonly enum: readonly ["Upcoming", "Current", "Historic", "All", "ArrivalDate", "DepartureDate"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter Bookings by the stay dates";
                };
                readonly updatedSince: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include only Bookings updated since this date";
                };
                readonly includeTransactions: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include details about transactions and schedule";
                };
                readonly includeExternal: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly includeQuoteDetails: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include quote details";
                };
                readonly trash: {
                    readonly enum: readonly ["False", "True", "All"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Query bookings that are in trash";
                };
                readonly stayFilterDate: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Date to filter when selected ArrivalDate or DepartureDate in stayFilter";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "Id of the booking";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly user_id: {
                                readonly type: "integer";
                                readonly description: "User the booking belongs to";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly arrival: {
                                readonly type: "string";
                                readonly description: "Arrival date";
                            };
                            readonly departure: {
                                readonly type: "string";
                                readonly description: "Departure date";
                            };
                            readonly property_id: {
                                readonly type: "integer";
                                readonly description: "Id of the property";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly rooms: {
                                readonly type: "array";
                                readonly items: {
                                    readonly required: readonly ["guest_breakdown"];
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly room_type_id: {
                                            readonly type: "integer";
                                            readonly description: "Id of the room type booked";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly guest_breakdown: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly adults: {
                                                    readonly maximum: 2147483647;
                                                    readonly minimum: 0;
                                                    readonly type: "integer";
                                                    readonly description: "Number of adults";
                                                    readonly format: "int32";
                                                };
                                                readonly children: {
                                                    readonly maximum: 2147483647;
                                                    readonly minimum: 0;
                                                    readonly type: "integer";
                                                    readonly description: "Number of children";
                                                    readonly format: "int32";
                                                };
                                                readonly infants: {
                                                    readonly maximum: 2147483647;
                                                    readonly minimum: 0;
                                                    readonly type: "integer";
                                                    readonly description: "Number of infants";
                                                    readonly format: "int32";
                                                };
                                                readonly pets: {
                                                    readonly maximum: 2147483647;
                                                    readonly minimum: 0;
                                                    readonly type: "integer";
                                                    readonly description: "Number of pets";
                                                    readonly format: "int32";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                            readonly description: "Guest breakdown";
                                        };
                                        readonly people: {
                                            readonly type: "integer";
                                            readonly description: "Deprecated. Map to GuestBreakdown.Adults";
                                            readonly format: "int32";
                                            readonly deprecated: true;
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly key_code: {
                                            readonly type: "string";
                                            readonly description: "KeyCode to access the property or room rented";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                    readonly description: "Room information related to the Booking";
                                };
                                readonly description: "Rooms booked";
                            };
                            readonly guest: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the guest";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Email of the guest";
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly description: "Phone number of the guest";
                                    };
                                    readonly country_code: {
                                        readonly type: "string";
                                        readonly description: "Code of the country the Guest is from";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Guest information related to the Booking";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "Language selected by the guest";
                            };
                            readonly status: {
                                readonly enum: readonly ["Open", "Tentative", "Booked", "Declined"];
                                readonly type: "string";
                                readonly description: "Status information of the Booking\n\n`Open` `Tentative` `Booked` `Declined`";
                            };
                            readonly is_unavailable: {
                                readonly type: "boolean";
                                readonly description: "Booking cannot be booked because calendar is not available";
                            };
                            readonly is_overbooked: {
                                readonly type: "boolean";
                                readonly description: "Booking is overbooked";
                            };
                            readonly tentative_expires_at: {
                                readonly type: "string";
                                readonly description: "Time the Tentative status will expire at";
                                readonly format: "date-time";
                            };
                            readonly source: {
                                readonly enum: readonly ["Manual", "OH", "NineFlats", "Airbnb", "AirbnbIntegration", "HomeAway", "BookingCom", "Expedia", "ICal", "Email", "FacebookMessenger", "PublicApi", "Other"];
                                readonly type: "string";
                                readonly description: "Type of source the Booking comes from\n\n`Manual` `OH` `NineFlats` `Airbnb` `AirbnbIntegration` `HomeAway` `BookingCom` `Expedia` `ICal` `Email` `FacebookMessenger` `PublicApi` `Other`";
                            };
                            readonly source_text: {
                                readonly type: "string";
                                readonly description: "Details of the booking from the source";
                            };
                            readonly created_from_ip: {
                                readonly type: "string";
                                readonly description: "Ip the booking was created from";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Time the booking was created at";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Last time the booking was updated";
                                readonly format: "date-time";
                            };
                            readonly canceled_at: {
                                readonly type: "string";
                                readonly description: "Date the booking was canceled at";
                                readonly format: "date-time";
                            };
                            readonly is_new: {
                                readonly type: "boolean";
                                readonly description: "When it is new, the owner has not seen the booking yet";
                            };
                            readonly is_deleted: {
                                readonly type: "boolean";
                                readonly description: "When it is deleted, the owner moved the booking to trash";
                            };
                            readonly currency_code: {
                                readonly type: "string";
                                readonly description: "Currency in which all amounts are expressed for this booking";
                            };
                            readonly total_amount: {
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly subtotals: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly stay: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly promotions: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly fees: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly taxes: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly addons: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly vat: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Subtotal information of the Booking";
                            };
                            readonly amount_paid: {
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly amount_due: {
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly quote: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "Id of the Quote";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly policy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Name of the policy";
                                            };
                                            readonly payments: {
                                                readonly type: "string";
                                                readonly description: "Description of the payment policy";
                                            };
                                            readonly cancellation: {
                                                readonly type: "string";
                                                readonly description: "Description of the cancellation policy";
                                            };
                                            readonly damage_deposit: {
                                                readonly type: "string";
                                                readonly description: "Description of the damage deposit policy";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                        readonly description: "Policy information related to the Booking";
                                    };
                                    readonly status: {
                                        readonly enum: readonly ["Null", "NotScheduled", "NotSent", "Agreed", "CancelledByOwner", "CancelledByGuest", "Rejected", "Deactivated", "ExpiredByGuest", "ExpiredByOwner", "PendingForOwner", "PendingForGuest", "PendingForPayment", "RedirectedToOffsitePayment", "ChangeRequested", "Changed", "Disconnected"];
                                        readonly type: "string";
                                        readonly description: "Information about the quote status\n\n`Null` `NotScheduled` `NotSent` `Agreed` `CancelledByOwner` `CancelledByGuest` `Rejected` `Deactivated` `ExpiredByGuest` `ExpiredByOwner` `PendingForOwner` `PendingForGuest` `PendingForPayment` `RedirectedToOffsitePayment` `ChangeRequested` `Changed` `Disconnected`";
                                    };
                                    readonly scheduled_transactions: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "integer";
                                                    readonly description: "Id of the scheduled item";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly type: {
                                                    readonly enum: readonly ["PrePayment", "InterimPayment", "BalancePayment", "PrecedingPayment", "Cancellation", "DamageDepositAuthorization", "DamageDepositVoid", "SecurityDepositCharge", "SecurityDepositRefund"];
                                                    readonly type: "string";
                                                    readonly description: "Type of scheduled transaction\n\n`PrePayment` `InterimPayment` `BalancePayment` `PrecedingPayment` `Cancellation` `DamageDepositAuthorization` `DamageDepositVoid` `SecurityDepositCharge` `SecurityDepositRefund`";
                                                };
                                                readonly status: {
                                                    readonly enum: readonly ["Scheduled", "Overdue", "Pending", "Aborted", "Paid", "Refunded", "Authorized", "Voided", "Captured", "Shown"];
                                                    readonly type: "string";
                                                    readonly description: "Status of a scheduled transaction\n\n`Scheduled` `Overdue` `Pending` `Aborted` `Paid` `Refunded` `Authorized` `Voided` `Captured` `Shown`";
                                                };
                                                readonly amount: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly due_at: {
                                                    readonly type: "string";
                                                    readonly description: "The date the schedule item will be due at. \r\nNull means that the date will be the date of the booking agreement.";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                            readonly description: "Transaction scheduled in the Quote";
                                        };
                                        readonly description: "Schedule details enforced by the Quote";
                                    };
                                    readonly scheduled_damage_protection: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "integer";
                                                    readonly description: "Id of the scheduled item";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly type: {
                                                    readonly enum: readonly ["PrePayment", "InterimPayment", "BalancePayment", "PrecedingPayment", "Cancellation", "DamageDepositAuthorization", "DamageDepositVoid", "SecurityDepositCharge", "SecurityDepositRefund"];
                                                    readonly type: "string";
                                                    readonly description: "Type of scheduled transaction\n\n`PrePayment` `InterimPayment` `BalancePayment` `PrecedingPayment` `Cancellation` `DamageDepositAuthorization` `DamageDepositVoid` `SecurityDepositCharge` `SecurityDepositRefund`";
                                                };
                                                readonly status: {
                                                    readonly enum: readonly ["Scheduled", "Overdue", "Pending", "Aborted", "Paid", "Refunded", "Authorized", "Voided", "Captured", "Shown"];
                                                    readonly type: "string";
                                                    readonly description: "Status of a scheduled transaction\n\n`Scheduled` `Overdue` `Pending` `Aborted` `Paid` `Refunded` `Authorized` `Voided` `Captured` `Shown`";
                                                };
                                                readonly amount: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly due_at: {
                                                    readonly type: "string";
                                                    readonly description: "The date the schedule item will be due at. \r\nNull means that the date will be the date of the booking agreement.";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                            readonly description: "Transaction scheduled in the Quote";
                                        };
                                        readonly description: "Schedule details of damage protection enforced by the Quote";
                                    };
                                    readonly room_type_items: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly room_type_id: {
                                                    readonly type: "integer";
                                                    readonly description: "Room type identifier";
                                                    readonly format: "int32";
                                                    readonly minimum: -2147483648;
                                                    readonly maximum: 2147483647;
                                                };
                                                readonly subtotal: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly prices: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly type: {
                                                                readonly type: "string";
                                                                readonly description: "Quote item type";
                                                            };
                                                            readonly amount: {
                                                                readonly type: "object";
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly description: {
                                                                readonly type: "string";
                                                                readonly description: "Quote item description";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly description: "Items belonging to the Quote related to this Room type";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Room types belonging to the Quote";
                                    };
                                    readonly addon_items: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item type";
                                                };
                                                readonly amount: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item description";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Addons belonging to the Quote";
                                    };
                                    readonly other_items: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item type";
                                                };
                                                readonly amount: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item description";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Other items belonging to the Quote";
                                    };
                                    readonly vat_items: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item type";
                                                };
                                                readonly amount: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item description";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Vat items belonging to the Quote";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Quote information related to the Booking";
                            };
                            readonly transactions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly description: "Id of the transaction";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["Payment", "Refund", "Show", "Authorization", "Void", "Capture"];
                                            readonly type: "string";
                                            readonly description: "Type of transaction\n\n`Payment` `Refund` `Show` `Authorization` `Void` `Capture`";
                                        };
                                        readonly status: {
                                            readonly enum: readonly ["Requested", "Processing", "Done", "Failed", "Canceled", "Abandoned", "Unknown"];
                                            readonly type: "string";
                                            readonly description: "Information about the status of the Transaction\n\n`Requested` `Processing` `Done` `Failed` `Canceled` `Abandoned` `Unknown`";
                                        };
                                        readonly payment_type: {
                                            readonly enum: readonly ["None", "PaypalWallet", "BankAccount", "StripeSpreedly", "Payyo", "AuthorizeNetSpreedly", "BraintreeSpreedly", "PayPalProSpreedly", "PciProxy", "SpreedlyTestSpreedly", "StripeSca", "LodgifyPaymentsStripe"];
                                            readonly type: "string";
                                            readonly description: "Information about the payment type of the Transaction\n\n`None` `PaypalWallet` `BankAccount` `StripeSpreedly` `Payyo` `AuthorizeNetSpreedly` `BraintreeSpreedly` `PayPalProSpreedly` `PciProxy` `SpreedlyTestSpreedly` `StripeSca` `LodgifyPaymentsStripe`";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly description: "Description of the transaction";
                                        };
                                        readonly amount: {
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly processed_at: {
                                            readonly type: "string";
                                            readonly description: "The time the transaction was processed at";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                    readonly description: "Information about each transaction of the Booking";
                                };
                                readonly description: "Transaction details of the booking";
                            };
                            readonly damage_protection: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly description: "Id of the transaction";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["Payment", "Refund", "Show", "Authorization", "Void", "Capture"];
                                            readonly type: "string";
                                            readonly description: "Type of transaction\n\n`Payment` `Refund` `Show` `Authorization` `Void` `Capture`";
                                        };
                                        readonly status: {
                                            readonly enum: readonly ["Requested", "Processing", "Done", "Failed", "Canceled", "Abandoned", "Unknown"];
                                            readonly type: "string";
                                            readonly description: "Information about the status of the Transaction\n\n`Requested` `Processing` `Done` `Failed` `Canceled` `Abandoned` `Unknown`";
                                        };
                                        readonly payment_type: {
                                            readonly enum: readonly ["None", "PaypalWallet", "BankAccount", "StripeSpreedly", "Payyo", "AuthorizeNetSpreedly", "BraintreeSpreedly", "PayPalProSpreedly", "PciProxy", "SpreedlyTestSpreedly", "StripeSca", "LodgifyPaymentsStripe"];
                                            readonly type: "string";
                                            readonly description: "Information about the payment type of the Transaction\n\n`None` `PaypalWallet` `BankAccount` `StripeSpreedly` `Payyo` `AuthorizeNetSpreedly` `BraintreeSpreedly` `PayPalProSpreedly` `PciProxy` `SpreedlyTestSpreedly` `StripeSca` `LodgifyPaymentsStripe`";
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly description: "Description of the transaction";
                                        };
                                        readonly amount: {
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly processed_at: {
                                            readonly type: "string";
                                            readonly description: "The time the transaction was processed at";
                                            readonly format: "date-time";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                    readonly description: "Information about each transaction of the Booking";
                                };
                                readonly description: "Damage-protection transaction details of the booking";
                            };
                            readonly notes: {
                                readonly type: "string";
                                readonly description: "Notes added by the owner";
                            };
                            readonly thread_uid: {
                                readonly type: "string";
                                readonly description: "Uid of the message thread the booking belongs to";
                                readonly format: "uuid";
                            };
                            readonly external_booking: {
                                readonly type: "string";
                                readonly description: "Booking information as received from an external channel";
                            };
                            readonly check_in: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly time: {
                                        readonly type: "string";
                                        readonly description: "The check-in time\r\nFormat: HH:mm:ss";
                                    };
                                    readonly initiator: {
                                        readonly type: "string";
                                        readonly description: "The check-in source of change";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Represents check-in for a booking";
                            };
                            readonly check_out: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly time: {
                                        readonly type: "string";
                                        readonly description: "The check-out time\r\nFormat: HH:mm:ss";
                                    };
                                    readonly initiator: {
                                        readonly type: "string";
                                        readonly description: "The check-out source of change";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Represents check-out for a booking";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Main booking model";
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllDeletedAsync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly deletedSince: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "DateTime so the returned list will only include the properties deleted since this datetime";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "integer";
                readonly format: "int32";
                readonly minimum: -2147483648;
                readonly maximum: 2147483647;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllPropertiesAsync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wid: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Website Id";
                };
                readonly updatedSince: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "DateTime so the returned list will only include the properties modified since this datetime";
                };
                readonly includeCount: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Boolean, if true it will return the total number of results";
                };
                readonly includeInOut: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Boolean, if true the results will include available dates for arrival or departure";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of the page to retrieve";
                };
                readonly size: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 50;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items per page (max. 50)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "integer";
                    readonly description: "Total number of items available. Only returned if includeCount = true";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "property identifier";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the property";
                            };
                            readonly internal_name: {
                                readonly type: "string";
                                readonly description: "Internal name of property";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description of the property";
                            };
                            readonly latitude: {
                                readonly type: "number";
                                readonly description: "Latitude coordinate of the house";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly longitude: {
                                readonly type: "number";
                                readonly description: "Longitude coordinate of the house";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Address of the property";
                            };
                            readonly hide_address: {
                                readonly type: "boolean";
                                readonly description: "Owner requested to hide address from public";
                            };
                            readonly zip: {
                                readonly type: "string";
                                readonly description: "Zip code for the property";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "City name where the property is located";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "Region name where the property is located";
                            };
                            readonly country_code: {
                                readonly type: "string";
                                readonly description: "Two Letters Country Code where the property is located";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "Country name where the property is located";
                            };
                            readonly image_url: {
                                readonly type: "string";
                                readonly description: "Image Url";
                            };
                            readonly has_addons: {
                                readonly type: "boolean";
                                readonly description: "Boolean indicating if the property has available addons";
                            };
                            readonly has_agreement: {
                                readonly type: "boolean";
                            };
                            readonly agreement_text: {
                                readonly type: "string";
                            };
                            readonly agreement_url: {
                                readonly type: "string";
                            };
                            readonly contact: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly spoken_languages: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly rating: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly price_unit_in_days: {
                                readonly type: "integer";
                                readonly description: "Price unit in days. This field indicates the number of days of stay the MinPrice and MaxPrice are\r\nSo if we have a 30 PriceUnitInDays, it means the MinPrice and MaxPrice are Monthly prices\r\nIf multiple prices per diferent periods are defined it will return daily prices";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly min_price: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly original_min_price: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly max_price: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly original_max_price: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly rooms: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly description: "Identifier of the roomtype";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "Name of the roomtype";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                            readonly in_out_max_date: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly in_out: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly is_restricted: {
                                        readonly type: "boolean";
                                    };
                                    readonly check_in: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly for: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly check_out: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly for: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly not_available: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly date: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly for: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly currency_code: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "DateTime of creation";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly description: "Last update datetime";
                                readonly format: "date-time";
                            };
                            readonly is_active: {
                                readonly type: "boolean";
                                readonly description: "Boolean indicating ig the property is active or not (meaning if is linked to a valid website)";
                            };
                            readonly subscription_plans: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly description: "Subscription plans";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Object that retuns information for a property";
                    };
                    readonly description: "List of properties for current page";
                };
            };
            readonly additionalProperties: false;
            readonly description: "Paged list of Properties Object.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAsync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id of the Booking";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "Id of the booking";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly user_id: {
                    readonly type: "integer";
                    readonly description: "User the booking belongs to";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly arrival: {
                    readonly type: "string";
                    readonly description: "Arrival date";
                };
                readonly departure: {
                    readonly type: "string";
                    readonly description: "Departure date";
                };
                readonly property_id: {
                    readonly type: "integer";
                    readonly description: "Id of the property";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly rooms: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["guest_breakdown"];
                        readonly type: "object";
                        readonly properties: {
                            readonly room_type_id: {
                                readonly type: "integer";
                                readonly description: "Id of the room type booked";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly guest_breakdown: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly adults: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of adults";
                                        readonly format: "int32";
                                    };
                                    readonly children: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of children";
                                        readonly format: "int32";
                                    };
                                    readonly infants: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of infants";
                                        readonly format: "int32";
                                    };
                                    readonly pets: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of pets";
                                        readonly format: "int32";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Guest breakdown";
                            };
                            readonly people: {
                                readonly type: "integer";
                                readonly description: "Deprecated. Map to GuestBreakdown.Adults";
                                readonly format: "int32";
                                readonly deprecated: true;
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly key_code: {
                                readonly type: "string";
                                readonly description: "KeyCode to access the property or room rented";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Room information related to the Booking";
                    };
                    readonly description: "Rooms booked";
                };
                readonly guest: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the guest";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Email of the guest";
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly description: "Phone number of the guest";
                        };
                        readonly country_code: {
                            readonly type: "string";
                            readonly description: "Code of the country the Guest is from";
                        };
                    };
                    readonly additionalProperties: false;
                    readonly description: "Guest information related to the Booking";
                };
                readonly language: {
                    readonly type: "string";
                    readonly description: "Language selected by the guest";
                };
                readonly status: {
                    readonly enum: readonly ["Open", "Tentative", "Booked", "Declined"];
                    readonly type: "string";
                    readonly description: "Status information of the Booking\n\n`Open` `Tentative` `Booked` `Declined`";
                };
                readonly is_unavailable: {
                    readonly type: "boolean";
                    readonly description: "Booking cannot be booked because calendar is not available";
                };
                readonly is_overbooked: {
                    readonly type: "boolean";
                    readonly description: "Booking is overbooked";
                };
                readonly tentative_expires_at: {
                    readonly type: "string";
                    readonly description: "Time the Tentative status will expire at";
                    readonly format: "date-time";
                };
                readonly source: {
                    readonly enum: readonly ["Manual", "OH", "NineFlats", "Airbnb", "AirbnbIntegration", "HomeAway", "BookingCom", "Expedia", "ICal", "Email", "FacebookMessenger", "PublicApi", "Other"];
                    readonly type: "string";
                    readonly description: "Type of source the Booking comes from\n\n`Manual` `OH` `NineFlats` `Airbnb` `AirbnbIntegration` `HomeAway` `BookingCom` `Expedia` `ICal` `Email` `FacebookMessenger` `PublicApi` `Other`";
                };
                readonly source_text: {
                    readonly type: "string";
                    readonly description: "Details of the booking from the source";
                };
                readonly created_from_ip: {
                    readonly type: "string";
                    readonly description: "Ip the booking was created from";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Time the booking was created at";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Last time the booking was updated";
                    readonly format: "date-time";
                };
                readonly canceled_at: {
                    readonly type: "string";
                    readonly description: "Date the booking was canceled at";
                    readonly format: "date-time";
                };
                readonly is_new: {
                    readonly type: "boolean";
                    readonly description: "When it is new, the owner has not seen the booking yet";
                };
                readonly is_deleted: {
                    readonly type: "boolean";
                    readonly description: "When it is deleted, the owner moved the booking to trash";
                };
                readonly currency_code: {
                    readonly type: "string";
                    readonly description: "Currency in which all amounts are expressed for this booking";
                };
                readonly total_amount: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly subtotals: {
                    readonly type: "object";
                    readonly properties: {
                        readonly stay: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly promotions: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly fees: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly taxes: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly addons: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                        readonly vat: {
                            readonly type: "object";
                            readonly additionalProperties: false;
                        };
                    };
                    readonly additionalProperties: false;
                    readonly description: "Subtotal information of the Booking";
                };
                readonly amount_paid: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly amount_due: {
                    readonly type: "object";
                    readonly additionalProperties: false;
                };
                readonly quote: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "Id of the Quote";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly policy: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "Name of the policy";
                                };
                                readonly payments: {
                                    readonly type: "string";
                                    readonly description: "Description of the payment policy";
                                };
                                readonly cancellation: {
                                    readonly type: "string";
                                    readonly description: "Description of the cancellation policy";
                                };
                                readonly damage_deposit: {
                                    readonly type: "string";
                                    readonly description: "Description of the damage deposit policy";
                                };
                            };
                            readonly additionalProperties: false;
                            readonly description: "Policy information related to the Booking";
                        };
                        readonly status: {
                            readonly enum: readonly ["Null", "NotScheduled", "NotSent", "Agreed", "CancelledByOwner", "CancelledByGuest", "Rejected", "Deactivated", "ExpiredByGuest", "ExpiredByOwner", "PendingForOwner", "PendingForGuest", "PendingForPayment", "RedirectedToOffsitePayment", "ChangeRequested", "Changed", "Disconnected"];
                            readonly type: "string";
                            readonly description: "Information about the quote status\n\n`Null` `NotScheduled` `NotSent` `Agreed` `CancelledByOwner` `CancelledByGuest` `Rejected` `Deactivated` `ExpiredByGuest` `ExpiredByOwner` `PendingForOwner` `PendingForGuest` `PendingForPayment` `RedirectedToOffsitePayment` `ChangeRequested` `Changed` `Disconnected`";
                        };
                        readonly scheduled_transactions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "Id of the scheduled item";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly type: {
                                        readonly enum: readonly ["PrePayment", "InterimPayment", "BalancePayment", "PrecedingPayment", "Cancellation", "DamageDepositAuthorization", "DamageDepositVoid", "SecurityDepositCharge", "SecurityDepositRefund"];
                                        readonly type: "string";
                                        readonly description: "Type of scheduled transaction\n\n`PrePayment` `InterimPayment` `BalancePayment` `PrecedingPayment` `Cancellation` `DamageDepositAuthorization` `DamageDepositVoid` `SecurityDepositCharge` `SecurityDepositRefund`";
                                    };
                                    readonly status: {
                                        readonly enum: readonly ["Scheduled", "Overdue", "Pending", "Aborted", "Paid", "Refunded", "Authorized", "Voided", "Captured", "Shown"];
                                        readonly type: "string";
                                        readonly description: "Status of a scheduled transaction\n\n`Scheduled` `Overdue` `Pending` `Aborted` `Paid` `Refunded` `Authorized` `Voided` `Captured` `Shown`";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly due_at: {
                                        readonly type: "string";
                                        readonly description: "The date the schedule item will be due at. \r\nNull means that the date will be the date of the booking agreement.";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Transaction scheduled in the Quote";
                            };
                            readonly description: "Schedule details enforced by the Quote";
                        };
                        readonly scheduled_damage_protection: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "Id of the scheduled item";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly type: {
                                        readonly enum: readonly ["PrePayment", "InterimPayment", "BalancePayment", "PrecedingPayment", "Cancellation", "DamageDepositAuthorization", "DamageDepositVoid", "SecurityDepositCharge", "SecurityDepositRefund"];
                                        readonly type: "string";
                                        readonly description: "Type of scheduled transaction\n\n`PrePayment` `InterimPayment` `BalancePayment` `PrecedingPayment` `Cancellation` `DamageDepositAuthorization` `DamageDepositVoid` `SecurityDepositCharge` `SecurityDepositRefund`";
                                    };
                                    readonly status: {
                                        readonly enum: readonly ["Scheduled", "Overdue", "Pending", "Aborted", "Paid", "Refunded", "Authorized", "Voided", "Captured", "Shown"];
                                        readonly type: "string";
                                        readonly description: "Status of a scheduled transaction\n\n`Scheduled` `Overdue` `Pending` `Aborted` `Paid` `Refunded` `Authorized` `Voided` `Captured` `Shown`";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly due_at: {
                                        readonly type: "string";
                                        readonly description: "The date the schedule item will be due at. \r\nNull means that the date will be the date of the booking agreement.";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Transaction scheduled in the Quote";
                            };
                            readonly description: "Schedule details of damage protection enforced by the Quote";
                        };
                        readonly room_type_items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly room_type_id: {
                                        readonly type: "integer";
                                        readonly description: "Room type identifier";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly subtotal: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly prices: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item type";
                                                };
                                                readonly amount: {
                                                    readonly type: "object";
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "Quote item description";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Items belonging to the Quote related to this Room type";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly description: "Room types belonging to the Quote";
                        };
                        readonly addon_items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Quote item type";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Quote item description";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly description: "Addons belonging to the Quote";
                        };
                        readonly other_items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Quote item type";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Quote item description";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly description: "Other items belonging to the Quote";
                        };
                        readonly vat_items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "Quote item type";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Quote item description";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly description: "Vat items belonging to the Quote";
                        };
                    };
                    readonly additionalProperties: false;
                    readonly description: "Quote information related to the Booking";
                };
                readonly transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "Id of the transaction";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly type: {
                                readonly enum: readonly ["Payment", "Refund", "Show", "Authorization", "Void", "Capture"];
                                readonly type: "string";
                                readonly description: "Type of transaction\n\n`Payment` `Refund` `Show` `Authorization` `Void` `Capture`";
                            };
                            readonly status: {
                                readonly enum: readonly ["Requested", "Processing", "Done", "Failed", "Canceled", "Abandoned", "Unknown"];
                                readonly type: "string";
                                readonly description: "Information about the status of the Transaction\n\n`Requested` `Processing` `Done` `Failed` `Canceled` `Abandoned` `Unknown`";
                            };
                            readonly payment_type: {
                                readonly enum: readonly ["None", "PaypalWallet", "BankAccount", "StripeSpreedly", "Payyo", "AuthorizeNetSpreedly", "BraintreeSpreedly", "PayPalProSpreedly", "PciProxy", "SpreedlyTestSpreedly", "StripeSca", "LodgifyPaymentsStripe"];
                                readonly type: "string";
                                readonly description: "Information about the payment type of the Transaction\n\n`None` `PaypalWallet` `BankAccount` `StripeSpreedly` `Payyo` `AuthorizeNetSpreedly` `BraintreeSpreedly` `PayPalProSpreedly` `PciProxy` `SpreedlyTestSpreedly` `StripeSca` `LodgifyPaymentsStripe`";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description of the transaction";
                            };
                            readonly amount: {
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly processed_at: {
                                readonly type: "string";
                                readonly description: "The time the transaction was processed at";
                                readonly format: "date-time";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Information about each transaction of the Booking";
                    };
                    readonly description: "Transaction details of the booking";
                };
                readonly damage_protection: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "Id of the transaction";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly type: {
                                readonly enum: readonly ["Payment", "Refund", "Show", "Authorization", "Void", "Capture"];
                                readonly type: "string";
                                readonly description: "Type of transaction\n\n`Payment` `Refund` `Show` `Authorization` `Void` `Capture`";
                            };
                            readonly status: {
                                readonly enum: readonly ["Requested", "Processing", "Done", "Failed", "Canceled", "Abandoned", "Unknown"];
                                readonly type: "string";
                                readonly description: "Information about the status of the Transaction\n\n`Requested` `Processing` `Done` `Failed` `Canceled` `Abandoned` `Unknown`";
                            };
                            readonly payment_type: {
                                readonly enum: readonly ["None", "PaypalWallet", "BankAccount", "StripeSpreedly", "Payyo", "AuthorizeNetSpreedly", "BraintreeSpreedly", "PayPalProSpreedly", "PciProxy", "SpreedlyTestSpreedly", "StripeSca", "LodgifyPaymentsStripe"];
                                readonly type: "string";
                                readonly description: "Information about the payment type of the Transaction\n\n`None` `PaypalWallet` `BankAccount` `StripeSpreedly` `Payyo` `AuthorizeNetSpreedly` `BraintreeSpreedly` `PayPalProSpreedly` `PciProxy` `SpreedlyTestSpreedly` `StripeSca` `LodgifyPaymentsStripe`";
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description of the transaction";
                            };
                            readonly amount: {
                                readonly type: "object";
                                readonly additionalProperties: false;
                            };
                            readonly processed_at: {
                                readonly type: "string";
                                readonly description: "The time the transaction was processed at";
                                readonly format: "date-time";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Information about each transaction of the Booking";
                    };
                    readonly description: "Damage-protection transaction details of the booking";
                };
                readonly notes: {
                    readonly type: "string";
                    readonly description: "Notes added by the owner";
                };
                readonly thread_uid: {
                    readonly type: "string";
                    readonly description: "Uid of the message thread the booking belongs to";
                    readonly format: "uuid";
                };
                readonly external_booking: {
                    readonly type: "string";
                    readonly description: "Booking information as received from an external channel";
                };
                readonly check_in: {
                    readonly type: "object";
                    readonly properties: {
                        readonly time: {
                            readonly type: "string";
                            readonly description: "The check-in time\r\nFormat: HH:mm:ss";
                        };
                        readonly initiator: {
                            readonly type: "string";
                            readonly description: "The check-in source of change";
                        };
                    };
                    readonly additionalProperties: false;
                    readonly description: "Represents check-in for a booking";
                };
                readonly check_out: {
                    readonly type: "object";
                    readonly properties: {
                        readonly time: {
                            readonly type: "string";
                            readonly description: "The check-out time\r\nFormat: HH:mm:ss";
                        };
                        readonly initiator: {
                            readonly type: "string";
                            readonly description: "The check-out source of change";
                        };
                    };
                    readonly additionalProperties: false;
                    readonly description: "Represents check-out for a booking";
                };
            };
            readonly additionalProperties: false;
            readonly description: "Main booking model";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCalendarByProperty: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property Id.";
                };
            };
            readonly required: readonly ["propertyId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Calendar start date";
                };
                readonly end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Calendar end date";
                };
                readonly includeDetails: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include booking status";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly user_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly property_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly room_type_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly periods: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly start: {
                                    readonly type: "string";
                                };
                                readonly end: {
                                    readonly type: "string";
                                };
                                readonly available: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly closed_period: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly bookings: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly channel_calendars: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                            };
                            readonly additionalProperties: false;
                        };
                    };
                };
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCalendarByRoomType: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property Id";
                };
                readonly roomTypeId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room type Id";
                };
            };
            readonly required: readonly ["propertyId", "roomTypeId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Calendar start date";
                };
                readonly end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Calendar end date";
                };
                readonly includeDetails: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include booking status";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly user_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly property_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly room_type_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly periods: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly start: {
                                    readonly type: "string";
                                };
                                readonly end: {
                                    readonly type: "string";
                                };
                                readonly available: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly closed_period: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly bookings: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly channel_calendars: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                            };
                            readonly additionalProperties: false;
                        };
                    };
                };
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCalendarByUser: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Calendar start date";
                };
                readonly end: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Calendar end date";
                };
                readonly includeDetails: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include booking status";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly user_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly property_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly room_type_id: {
                        readonly type: "integer";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly periods: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly start: {
                                    readonly type: "string";
                                };
                                readonly end: {
                                    readonly type: "string";
                                };
                                readonly available: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly closed_period: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "integer";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly bookings: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly channel_calendars: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                                readonly format: "int32";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                            };
                            readonly additionalProperties: false;
                        };
                    };
                };
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExternalBookingsAsync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id of the Booking";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly external_bookings: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly created_at: {
                                readonly type: "string";
                                readonly description: "Time the external booking was created at";
                                readonly format: "date-time";
                            };
                            readonly content: {
                                readonly type: "string";
                                readonly description: "Contents of the external booking";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "External booking model";
                    };
                    readonly description: "List of external bookings";
                };
            };
            readonly additionalProperties: false;
            readonly description: "External bookings result";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentLinkAsync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id of the Booking";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "Url address to the payment page";
                };
            };
            readonly additionalProperties: false;
            readonly description: "Represents a payment link for a booking";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPropertyByIdV2: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id tof the property";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly wid: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Website Id";
                };
                readonly includeInOut: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Boolean, if true the results will include available dates for arrival or departure";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly description: "property identifier";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "Name of the property";
                };
                readonly internal_name: {
                    readonly type: "string";
                    readonly description: "Internal name of property";
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "Description of the property";
                };
                readonly latitude: {
                    readonly type: "number";
                    readonly description: "Latitude coordinate of the house";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly longitude: {
                    readonly type: "number";
                    readonly description: "Longitude coordinate of the house";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "Address of the property";
                };
                readonly hide_address: {
                    readonly type: "boolean";
                    readonly description: "Owner requested to hide address from public";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly description: "Zip code for the property";
                };
                readonly city: {
                    readonly type: "string";
                    readonly description: "City name where the property is located";
                };
                readonly state: {
                    readonly type: "string";
                    readonly description: "Region name where the property is located";
                };
                readonly country_code: {
                    readonly type: "string";
                    readonly description: "Two Letters Country Code where the property is located";
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "Country name where the property is located";
                };
                readonly image_url: {
                    readonly type: "string";
                    readonly description: "Image Url";
                };
                readonly has_addons: {
                    readonly type: "boolean";
                    readonly description: "Boolean indicating if the property has available addons";
                };
                readonly has_agreement: {
                    readonly type: "boolean";
                };
                readonly agreement_text: {
                    readonly type: "string";
                };
                readonly agreement_url: {
                    readonly type: "string";
                };
                readonly contact: {
                    readonly type: "object";
                    readonly properties: {
                        readonly spoken_languages: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly rating: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly price_unit_in_days: {
                    readonly type: "integer";
                    readonly description: "Price unit in days. This field indicates the number of days of stay the MinPrice and MaxPrice are\r\nSo if we have a 30 PriceUnitInDays, it means the MinPrice and MaxPrice are Monthly prices\r\nIf multiple prices per diferent periods are defined it will return daily prices";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly min_price: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly original_min_price: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly max_price: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly original_max_price: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly rooms: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "Identifier of the roomtype";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the roomtype";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly in_out_max_date: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly in_out: {
                    readonly type: "object";
                    readonly properties: {
                        readonly is_restricted: {
                            readonly type: "boolean";
                        };
                        readonly check_in: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly for: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly check_out: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly for: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly not_available: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly date: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly for: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly currency_code: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "DateTime of creation";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly description: "Last update datetime";
                    readonly format: "date-time";
                };
                readonly is_active: {
                    readonly type: "boolean";
                    readonly description: "Boolean indicating ig the property is active or not (meaning if is linked to a valid website)";
                };
                readonly subscription_plans: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly description: "Subscription plans";
                };
            };
            readonly additionalProperties: false;
            readonly description: "Object that retuns information for a property";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2MessagingThreadguid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly threadGuid: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Thread Id";
                };
            };
            readonly required: readonly ["threadGuid"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly thread_uid: {
                        readonly type: "string";
                        readonly description: "The thread's unique identifier";
                        readonly format: "uuid";
                    };
                    readonly guest_name: {
                        readonly type: "string";
                        readonly description: "The thread's guest name";
                    };
                    readonly guest_email: {
                        readonly type: "string";
                        readonly description: "The thread's guest email";
                    };
                    readonly last_message_date: {
                        readonly type: "string";
                        readonly description: "Date and time of the last message in the thread";
                        readonly format: "date-time";
                    };
                    readonly is_read: {
                        readonly type: "boolean";
                        readonly description: "Read status of the thread";
                    };
                    readonly messages: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                    readonly description: "Message Id";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly subject: {
                                    readonly type: "string";
                                    readonly description: "Message subject";
                                };
                                readonly message: {
                                    readonly type: "string";
                                    readonly description: "Message body (You can expect HTML content)";
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "Message type: Owner, Renter";
                                };
                                readonly date_created: {
                                    readonly type: "string";
                                    readonly description: "Creation date of the message";
                                    readonly format: "date-time";
                                };
                                readonly attachments: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly file_name: {
                                                readonly type: "string";
                                                readonly description: "Attachment's file name";
                                            };
                                            readonly content_length: {
                                                readonly type: "string";
                                                readonly description: "Length of the attachment in bytes";
                                            };
                                            readonly content_type: {
                                                readonly type: "string";
                                                readonly description: "Attachment's content type (e.g. text/plain, application/pdf, image/jpeg)";
                                            };
                                            readonly file_url: {
                                                readonly type: "string";
                                                readonly description: "Attachment's file url to download";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                        readonly description: "Details of a message attachment";
                                    };
                                    readonly description: "List of attachments in the message";
                                };
                                readonly message_status: {
                                    readonly type: "string";
                                    readonly description: "Message status: Submitted, Sent, Delivered, Failed";
                                };
                                readonly is_read: {
                                    readonly type: "boolean";
                                    readonly description: "Read status of the message";
                                };
                            };
                            readonly additionalProperties: false;
                            readonly description: "Object to hold a message details within a thread";
                        };
                        readonly description: "List of messages in the thread";
                    };
                };
                readonly additionalProperties: false;
                readonly description: "Object to hold the details of a thread";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                };
                readonly instance: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2PropertiesIdRooms: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property identifier";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly wid: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Website Id";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly images: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly text: {
                                    readonly type: "string";
                                };
                                readonly url: {
                                    readonly type: "string";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "List of images associated with this room";
                    };
                    readonly amenities: {
                        readonly type: "object";
                        readonly additionalProperties: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly prefix: {
                                        readonly type: "string";
                                    };
                                    readonly bracket: {
                                        readonly type: "string";
                                    };
                                    readonly text: {
                                        readonly type: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly description: "List of amenities available of the room";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "A description of a room.";
                    };
                    readonly breakfast_included: {
                        readonly type: "boolean";
                        readonly description: "A boolean value indicating if the breakfast is included in the price of the booking.";
                    };
                    readonly has_parking: {
                        readonly type: "boolean";
                        readonly description: "A boolean value indicating if there is a parking spot available.";
                    };
                    readonly adults_only: {
                        readonly type: "boolean";
                        readonly description: "A boolean value indicating if the property is only available for adults.";
                    };
                    readonly pets_allowed: {
                        readonly type: "boolean";
                        readonly description: "A boolean value indicating if the property allows pets.";
                    };
                    readonly show_additional_key_facts: {
                        readonly type: "boolean";
                    };
                    readonly id: {
                        readonly type: "integer";
                        readonly description: "Room identifier.";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Name of the room.";
                    };
                    readonly image_url: {
                        readonly type: "string";
                        readonly description: "URL address of the image of the room.";
                    };
                    readonly max_people: {
                        readonly type: "integer";
                        readonly description: "Maximum number of people the room can host.";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly units: {
                        readonly type: "integer";
                        readonly description: "Number of units (same room type) that this room has.";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly has_wifi: {
                        readonly type: "boolean";
                        readonly description: "A boolean value indicating if the property has wifi available.";
                    };
                    readonly has_meal_plan: {
                        readonly type: "boolean";
                        readonly description: "A boolean value indicating if the property has a meal plan available.";
                    };
                    readonly bedrooms: {
                        readonly type: "integer";
                        readonly description: "Number of bedrooms in the room.";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly bathrooms: {
                        readonly type: "integer";
                        readonly description: "Number of bathrooms in the room.";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly area_unit: {
                        readonly type: "string";
                        readonly description: "This value indicates if the area is given in square feet(sqf) or square meters(sqm).";
                    };
                    readonly area: {
                        readonly type: "number";
                        readonly description: "This value indicates how many meters/feet the unit has; the value is given in the unit of measure set in the parameter area_unit.";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly min_price: {
                        readonly type: "number";
                        readonly description: "Minimal price the booking will cost; this parameter is always given in euros.";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly original_min_price: {
                        readonly type: "number";
                        readonly description: "This parameter is the same as min_price (minimal price the booking will cost) but given in the currency of the owner - any currency that can be passed to the system.\r\nA list of all available currencies can be found in the section CurrenciesApi.The currency used here is specified by the parameters in “currency”.";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly max_price: {
                        readonly type: "number";
                        readonly description: "Maximum price the booking will cost; this parameter is always given in euros.";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly original_max_price: {
                        readonly type: "number";
                        readonly description: "This parameter is the same as max_price (maximum price the booking will cost) but given in the currency of the owner - any currency that can be passed to the system.\r\nA list of all available currencies can be found in the section CurrenciesApi.The currency used here is specified by the parameters in “currency”.";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly price_unit_in_days: {
                        readonly type: "integer";
                        readonly description: "Price unit in days.\r\nThis field indicates the number of days of stay the min_price and max_price are.So if we have a 30 price_unit_in_days, it means the min_price and max_price are Monthly prices.If multiple prices per different periods are defined it will return daily prices";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                };
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2QuotePropertyid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property identifier";
                };
            };
            readonly required: readonly ["propertyId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly arrival: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Arrival date";
                };
                readonly departure: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Departure date";
                };
                readonly roomTypes: {
                    readonly type: "array";
                    readonly items: {
                        readonly required: readonly ["guest_breakdown"];
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "RoomType identifier";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly guest_breakdown: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly adults: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of adults";
                                        readonly format: "int32";
                                    };
                                    readonly children: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of children";
                                        readonly format: "int32";
                                    };
                                    readonly infants: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of infants";
                                        readonly format: "int32";
                                    };
                                    readonly pets: {
                                        readonly maximum: 2147483647;
                                        readonly minimum: 0;
                                        readonly type: "integer";
                                        readonly description: "Number of pets";
                                        readonly format: "int32";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Guest breakdown";
                            };
                            readonly people: {
                                readonly type: "integer";
                                readonly description: "Deprecated. Map to GuestBreakdown.Adults";
                                readonly format: "int32";
                                readonly deprecated: true;
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Room type parameters";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room type details";
                };
                readonly addOns: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "Add-on identifier";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly units: {
                                readonly type: "integer";
                                readonly description: "Add-on units. Optional, depending on the type of add-on.";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional add-ons to include in Quote";
                };
                readonly promotionCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Optional promotion code to apply to Quote";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly total_including_vat: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly total_excluding_vat: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly total_vat: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly property_id: {
                        readonly type: "integer";
                        readonly description: "";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly date_arrival: {
                        readonly type: "string";
                        readonly description: "";
                        readonly format: "date-time";
                    };
                    readonly date_departure: {
                        readonly type: "string";
                        readonly description: "";
                        readonly format: "date-time";
                    };
                    readonly currency_code: {
                        readonly type: "string";
                        readonly description: "";
                    };
                    readonly room_types: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly room_type_id: {
                                    readonly type: "integer";
                                    readonly description: "";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly people: {
                                    readonly type: "integer";
                                    readonly description: "";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly price_types: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly enum: readonly ["RoomRate", "Promotion", "Fee", "AddOn", "Tax", "Other"];
                                                readonly type: "string";
                                                readonly description: "`RoomRate` `Promotion` `Fee` `AddOn` `Tax` `Other`";
                                            };
                                            readonly is_negative: {
                                                readonly type: "boolean";
                                                readonly description: "";
                                            };
                                            readonly description: {
                                                readonly type: "string";
                                                readonly description: "";
                                            };
                                            readonly prices: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uid: {
                                                            readonly type: "string";
                                                            readonly description: "";
                                                        };
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly description: "";
                                                        };
                                                        readonly amount: {
                                                            readonly type: "number";
                                                            readonly description: "";
                                                            readonly format: "double";
                                                            readonly minimum: -1.7976931348623157e+308;
                                                            readonly maximum: 1.7976931348623157e+308;
                                                        };
                                                        readonly fee_type: {
                                                            readonly enum: readonly ["Cleaning", "Miscellaneous", "DamageProtectionInsurance", "ManagementFee", "ServiceFee", "Wood", "DrinkingWater", "WaterCraftMooring", "WaterCraft", "Water", "Vehicle", "FoodUtensils", "UtensilsCleaning", "Transportation", "Tour", "Toiletries", "Spa", "Resort", "Rent", "Parking", "Phone", "OnSitePaymentMethod", "Oil", "LinensBed", "LinensBath", "Linens", "Laundry", "Labor", "Internet", "TravelInsurance", "HotTub", "HighChair", "Heating", "Gas", "Gardening", "Food", "Equipment", "Electricity", "Concierge", "PoolHeating", "Pool", "Class", "BabyBed", "PropertyAssociation", "AirConditioning", "AdditionalBed", "PetFee", "ServiceCharge", "GratuityFee", "DamageWaiver", "Community"];
                                                            readonly type: "string";
                                                            readonly description: "`Cleaning` `Miscellaneous` `DamageProtectionInsurance` `ManagementFee` `ServiceFee` `Wood` `DrinkingWater` `WaterCraftMooring` `WaterCraft` `Water` `Vehicle` `FoodUtensils` `UtensilsCleaning` `Transportation` `Tour` `Toiletries` `Spa` `Resort` `Rent` `Parking` `Phone` `OnSitePaymentMethod` `Oil` `LinensBed` `LinensBath` `Linens` `Laundry` `Labor` `Internet` `TravelInsurance` `HotTub` `HighChair` `Heating` `Gas` `Gardening` `Food` `Equipment` `Electricity` `Concierge` `PoolHeating` `Pool` `Class` `BabyBed` `PropertyAssociation` `AirConditioning` `AdditionalBed` `PetFee` `ServiceCharge` `GratuityFee` `DamageWaiver` `Community`";
                                                        };
                                                        readonly room_rate_type: {
                                                            readonly enum: readonly ["Stay", "ShortStayPremium"];
                                                            readonly type: "string";
                                                            readonly description: "`Stay` `ShortStayPremium`";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: "";
                                            };
                                            readonly subtotal: {
                                                readonly type: "number";
                                                readonly description: "";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly description: "";
                                };
                                readonly subtotal: {
                                    readonly type: "number";
                                    readonly description: "";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "Room types belonging to the Quote";
                    };
                    readonly add_ons: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly add_on_id: {
                                    readonly type: "integer";
                                    readonly description: "";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly units: {
                                    readonly type: "integer";
                                    readonly description: "";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly description: "";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "Add-ons belonging to the Quote";
                    };
                    readonly other_items: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly description: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly description: "";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "Other items belonging to the Quote";
                    };
                    readonly add_ons_subtotal: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly rate_policy_user_id: {
                        readonly type: "integer";
                        readonly description: "";
                        readonly format: "int32";
                        readonly minimum: -2147483648;
                        readonly maximum: 2147483647;
                    };
                    readonly scheduled_payments: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly date_due: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly description: "";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly is_current: {
                                    readonly type: "boolean";
                                    readonly description: "";
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "";
                    };
                    readonly scheduled_damage_protection: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly date_due: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly description: "";
                                    readonly format: "double";
                                    readonly minimum: -1.7976931348623157e+308;
                                    readonly maximum: 1.7976931348623157e+308;
                                };
                                readonly is_current: {
                                    readonly type: "boolean";
                                    readonly description: "";
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly description: "";
                    };
                    readonly security_deposit: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly total_scheduled_payments: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly total_to_collect_manually: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly amount_gross: {
                        readonly type: "number";
                        readonly description: "";
                        readonly format: "double";
                        readonly minimum: -1.7976931348623157e+308;
                        readonly maximum: 1.7976931348623157e+308;
                    };
                    readonly rental_agreement: {
                        readonly type: "string";
                        readonly description: "";
                        readonly format: "uuid";
                    };
                    readonly cancellation_policy_text: {
                        readonly type: "string";
                        readonly description: "";
                    };
                    readonly security_deposit_text: {
                        readonly type: "string";
                        readonly description: "";
                    };
                    readonly is_verification: {
                        readonly type: "boolean";
                        readonly description: "";
                    };
                };
                readonly additionalProperties: false;
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ReservationsBookingsIdCheckin: {
    readonly body: {
        readonly required: readonly ["time"];
        readonly type: "object";
        readonly properties: {
            readonly time: {
                readonly type: "string";
                readonly description: "Time of the checkin (in the property's timezone). Use format HH:mm:ss";
                readonly format: "date-span";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Object used to checkin a booking";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Booking Identifier";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2ReservationsBookingsIdCheckout: {
    readonly body: {
        readonly required: readonly ["time"];
        readonly type: "object";
        readonly properties: {
            readonly time: {
                readonly type: "string";
                readonly description: "Time of the checkout (in the property's timezone). Use format HH:mm:ss";
                readonly format: "date-span";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Object used to checkout a booking";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Booking Identifier";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RateSettingsV2: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly houseId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly bookability: {
                    readonly enum: readonly ["InstantBooking", "BookingRequest", "EnquiryOnly"];
                    readonly type: "string";
                    readonly description: "`InstantBooking` `BookingRequest` `EnquiryOnly`";
                };
                readonly check_in_hour: {
                    readonly type: "integer";
                    readonly description: "If present, minimum hour allowed to check in\r\n-1: Flexible, 0-23: Hour of day";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly check_out_hour: {
                    readonly type: "integer";
                    readonly description: "If present, maximum hour allowed to check out\r\n-1: Flexible, 0-23: Hour of day";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly booking_window_days: {
                    readonly type: "integer";
                    readonly description: "Limits how many days in advance guests can book.";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly advance_notice_days: {
                    readonly type: "integer";
                    readonly description: "Specifies how many days in advance a guest can make a reservation";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly advance_notice_hours: {
                    readonly type: "integer";
                    readonly description: "Specifies how many hours in advance a guest can make a reservation";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly preparation_time_days: {
                    readonly type: "integer";
                    readonly description: "Indicates the time between bookings when reservations are not allowed";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly currency_code: {
                    readonly type: "string";
                    readonly description: "Currency code";
                };
                readonly vat: {
                    readonly type: "number";
                    readonly description: "Vat amount";
                    readonly format: "double";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly is_vat_exclusive: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the price is vat exclusive";
                };
                readonly fees: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly fee_name: {
                                readonly type: "string";
                                readonly description: "Name of the fee";
                            };
                            readonly fee_type: {
                                readonly type: "string";
                                readonly description: "Type of the fee";
                            };
                            readonly applied_for_nights: {
                                readonly type: "integer";
                                readonly description: "Fee is applied only if the stay of nights is less or equal than the amount nights";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly charge_type: {
                                readonly type: "string";
                                readonly description: "Type of charge. Possible values are: \"PerQuantity\", \"SingleCharge\", \"PerPerson\", or \"PerRoom\"";
                            };
                            readonly frequency: {
                                readonly type: "string";
                                readonly description: "Frequency, can be either \"PerStay\" or \"PerNight\"";
                            };
                            readonly price: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly is_vat_exclusive: {
                                        readonly type: "boolean";
                                        readonly description: "Indicates if the fee price is vat exclusive";
                                    };
                                    readonly vat_percentage: {
                                        readonly type: "number";
                                        readonly description: "VAT percentage value (only defined if not inclusive)";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly rate_type: {
                                        readonly type: "string";
                                        readonly description: "Rate type, equals \"Fixed\" for a fixed amount price, \"Percentage\" for a percentage price";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly percentage: {
                                        readonly type: "number";
                                        readonly description: "Price value percentage";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Rate fee price";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Rate fee";
                    };
                    readonly description: "List of fees applied to this room rate";
                };
                readonly taxes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly tax_name: {
                                readonly type: "string";
                                readonly description: "Name of the tax";
                            };
                            readonly tax_type: {
                                readonly type: "string";
                                readonly description: "Type of the tax";
                            };
                            readonly charge_type: {
                                readonly type: "string";
                                readonly description: "Type of charge. Possible values are: \"PerQuantity\", \"SingleCharge\", \"PerPerson\", or \"PerRoom\"";
                            };
                            readonly frequency: {
                                readonly type: "string";
                                readonly description: "Frequency, can be either \"PerStay\" or \"PerNight\"";
                            };
                            readonly price: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly rate_type: {
                                        readonly type: "string";
                                        readonly description: "Rate type, equals \"Fixed\" for a fixed amount price, \"Percentage\" for a percentage price";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly percentage: {
                                        readonly type: "number";
                                        readonly description: "Price value percentage";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Rate price";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Rate tax";
                    };
                    readonly description: "List of taxes applied to this room rate";
                };
                readonly promotions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Promotion name";
                            };
                            readonly price: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly rate_type: {
                                        readonly type: "string";
                                        readonly description: "Rate type, equals \"Fixed\" for a fixed amount price, \"Percentage\" for a percentage price";
                                    };
                                    readonly amount: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                    };
                                    readonly percentage: {
                                        readonly type: "number";
                                        readonly description: "Price value percentage";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Rate price";
                            };
                            readonly early_booker_days: {
                                readonly type: "integer";
                                readonly description: "Indicates the amount of nights or more before arrival to apply the promotion";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly last_minute_days: {
                                readonly type: "integer";
                                readonly description: "Indicates the amount of days nights or less before arrival to apply the promotion";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly minimum_stay_days: {
                                readonly type: "integer";
                                readonly description: "Indicates the type nights minimum stay required to apply the promotion";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly booking_dates: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly lower: {
                                            readonly type: "string";
                                        };
                                        readonly upper: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly description: "Promotion is applied only if booked during the specific date range";
                            };
                            readonly stay_dates: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly lower: {
                                            readonly type: "string";
                                        };
                                        readonly upper: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly description: "Date range when the promotion applies";
                            };
                            readonly codes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly code: {
                                            readonly type: "string";
                                            readonly description: "Promotion code";
                                        };
                                        readonly is_active: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if the promotion code is active";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                    readonly description: "Rate promotion code";
                                };
                                readonly description: "List of valid codes applied to this promotion";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Rate promotion";
                    };
                    readonly description: "List of promotions applied to this room rate";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RatesCalendarV2: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly RoomTypeId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly HouseId: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly StartDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly EndDate: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["RoomTypeId", "HouseId", "StartDate", "EndDate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly calendar_items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "Represents the DateTime for the calendar item";
                            };
                            readonly is_default: {
                                readonly type: "boolean";
                                readonly description: "Indicates if the calendar item is the default rate";
                            };
                            readonly prices: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly min_stay: {
                                            readonly type: "integer";
                                            readonly description: "Minimum days to stay";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly max_stay: {
                                            readonly type: "integer";
                                            readonly description: "Maximum days to stay";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                        readonly price_per_day: {
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly price_per_additional_guest: {
                                            readonly type: "object";
                                            readonly additionalProperties: false;
                                        };
                                        readonly additional_guests_starts_from: {
                                            readonly type: "integer";
                                            readonly description: "Indicates the number of people from which an extra charge is charged";
                                            readonly format: "int32";
                                            readonly minimum: -2147483648;
                                            readonly maximum: 2147483647;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                                readonly description: "List of prices for the calendar item";
                            };
                        };
                        readonly additionalProperties: false;
                    };
                    readonly description: "Calendar items";
                };
                readonly rate_settings: {
                    readonly type: "object";
                    readonly properties: {
                        readonly bookability: {
                            readonly enum: readonly ["InstantBooking", "BookingRequest", "EnquiryOnly"];
                            readonly type: "string";
                            readonly description: "`InstantBooking` `BookingRequest` `EnquiryOnly`";
                        };
                        readonly check_in_hour: {
                            readonly type: "integer";
                            readonly description: "If present, minimum hour allowed to check in\r\n-1: Flexible, 0-23: Hour of day";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly check_out_hour: {
                            readonly type: "integer";
                            readonly description: "If present, maximum hour allowed to check out\r\n-1: Flexible, 0-23: Hour of day";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly booking_window_days: {
                            readonly type: "integer";
                            readonly description: "Limits how many days in advance guests can book.";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly advance_notice_days: {
                            readonly type: "integer";
                            readonly description: "Specifies how many days in advance a guest can make a reservation";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly advance_notice_hours: {
                            readonly type: "integer";
                            readonly description: "Specifies how many hours in advance a guest can make a reservation";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly preparation_time_days: {
                            readonly type: "integer";
                            readonly description: "Indicates the time between bookings when reservations are not allowed";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly currency_code: {
                            readonly type: "string";
                            readonly description: "Currency code";
                        };
                        readonly vat: {
                            readonly type: "number";
                            readonly description: "Vat amount";
                            readonly format: "double";
                            readonly minimum: -1.7976931348623157e+308;
                            readonly maximum: 1.7976931348623157e+308;
                        };
                        readonly is_vat_exclusive: {
                            readonly type: "boolean";
                            readonly description: "Indicates if the price is vat exclusive";
                        };
                        readonly fees: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly fee_name: {
                                        readonly type: "string";
                                        readonly description: "Name of the fee";
                                    };
                                    readonly fee_type: {
                                        readonly type: "string";
                                        readonly description: "Type of the fee";
                                    };
                                    readonly applied_for_nights: {
                                        readonly type: "integer";
                                        readonly description: "Fee is applied only if the stay of nights is less or equal than the amount nights";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly charge_type: {
                                        readonly type: "string";
                                        readonly description: "Type of charge. Possible values are: \"PerQuantity\", \"SingleCharge\", \"PerPerson\", or \"PerRoom\"";
                                    };
                                    readonly frequency: {
                                        readonly type: "string";
                                        readonly description: "Frequency, can be either \"PerStay\" or \"PerNight\"";
                                    };
                                    readonly price: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly is_vat_exclusive: {
                                                readonly type: "boolean";
                                                readonly description: "Indicates if the fee price is vat exclusive";
                                            };
                                            readonly vat_percentage: {
                                                readonly type: "number";
                                                readonly description: "VAT percentage value (only defined if not inclusive)";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                            readonly rate_type: {
                                                readonly type: "string";
                                                readonly description: "Rate type, equals \"Fixed\" for a fixed amount price, \"Percentage\" for a percentage price";
                                            };
                                            readonly amount: {
                                                readonly type: "object";
                                                readonly additionalProperties: false;
                                            };
                                            readonly percentage: {
                                                readonly type: "number";
                                                readonly description: "Price value percentage";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                        readonly description: "Rate fee price";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Rate fee";
                            };
                            readonly description: "List of fees applied to this room rate";
                        };
                        readonly taxes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly tax_name: {
                                        readonly type: "string";
                                        readonly description: "Name of the tax";
                                    };
                                    readonly tax_type: {
                                        readonly type: "string";
                                        readonly description: "Type of the tax";
                                    };
                                    readonly charge_type: {
                                        readonly type: "string";
                                        readonly description: "Type of charge. Possible values are: \"PerQuantity\", \"SingleCharge\", \"PerPerson\", or \"PerRoom\"";
                                    };
                                    readonly frequency: {
                                        readonly type: "string";
                                        readonly description: "Frequency, can be either \"PerStay\" or \"PerNight\"";
                                    };
                                    readonly price: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly rate_type: {
                                                readonly type: "string";
                                                readonly description: "Rate type, equals \"Fixed\" for a fixed amount price, \"Percentage\" for a percentage price";
                                            };
                                            readonly amount: {
                                                readonly type: "object";
                                                readonly additionalProperties: false;
                                            };
                                            readonly percentage: {
                                                readonly type: "number";
                                                readonly description: "Price value percentage";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                        readonly description: "Rate price";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Rate tax";
                            };
                            readonly description: "List of taxes applied to this room rate";
                        };
                        readonly promotions: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Promotion name";
                                    };
                                    readonly price: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly rate_type: {
                                                readonly type: "string";
                                                readonly description: "Rate type, equals \"Fixed\" for a fixed amount price, \"Percentage\" for a percentage price";
                                            };
                                            readonly amount: {
                                                readonly type: "object";
                                                readonly additionalProperties: false;
                                            };
                                            readonly percentage: {
                                                readonly type: "number";
                                                readonly description: "Price value percentage";
                                                readonly format: "double";
                                                readonly minimum: -1.7976931348623157e+308;
                                                readonly maximum: 1.7976931348623157e+308;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                        readonly description: "Rate price";
                                    };
                                    readonly early_booker_days: {
                                        readonly type: "integer";
                                        readonly description: "Indicates the amount of nights or more before arrival to apply the promotion";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly last_minute_days: {
                                        readonly type: "integer";
                                        readonly description: "Indicates the amount of days nights or less before arrival to apply the promotion";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly minimum_stay_days: {
                                        readonly type: "integer";
                                        readonly description: "Indicates the type nights minimum stay required to apply the promotion";
                                        readonly format: "int32";
                                        readonly minimum: -2147483648;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly booking_dates: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly lower: {
                                                    readonly type: "string";
                                                };
                                                readonly upper: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Promotion is applied only if booked during the specific date range";
                                    };
                                    readonly stay_dates: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly lower: {
                                                    readonly type: "string";
                                                };
                                                readonly upper: {
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly description: "Date range when the promotion applies";
                                    };
                                    readonly codes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly code: {
                                                    readonly type: "string";
                                                    readonly description: "Promotion code";
                                                };
                                                readonly is_active: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the promotion code is active";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                            readonly description: "Rate promotion code";
                                        };
                                        readonly description: "List of valid codes applied to this promotion";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "Rate promotion";
                            };
                            readonly description: "List of promotions applied to this room rate";
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly description: "Defines the daily rates calendar and rate settings for a property";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateKeyCodes: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly rooms: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly room_type_id: {
                            readonly type: "integer";
                            readonly description: "Identifier of the room type";
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly key_code: {
                            readonly type: "string";
                            readonly description: "KeyCode PIN to access to the property rented.";
                        };
                    };
                    readonly additionalProperties: false;
                    readonly description: "Represents a Booking Roomtype, with and identifier and the keycode to access to the property rented.";
                };
                readonly description: "List of room types of the booking.";
            };
        };
        readonly additionalProperties: false;
        readonly description: "Represents a Booking with the list of room types and keycodes to access to the properties rented.";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id of the booking";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly rooms: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly room_type_id: {
                                readonly type: "integer";
                                readonly description: "Identifier of the room type";
                                readonly format: "int32";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly key_code: {
                                readonly type: "string";
                                readonly description: "KeyCode PIN to access to the property rented.";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Represents a Booking Roomtype, with and identifier and the keycode to access to the property rented.";
                    };
                    readonly description: "List of room types of the booking.";
                };
            };
            readonly additionalProperties: false;
            readonly description: "Represents a Booking with the list of room types and keycodes to access to the properties rented.";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly enum: readonly ["Unknown", "NoRateDefined", "MinStayRequired", "BookingStatusUnknown", "BookingMessageTypeNotAllowed", "BookingNoRooms", "BookingCannotChangeStatus", "EnquiryAlreadyUpgraded", "BookingPaymentNotValid", "ArrivalNotValid", "DepartureNotValid", "PropertyNotAvailable", "MaxStayExceeded", "CaptchaInvalid", "StripeError", "ValidationError", "PaymentError", "ArgumentError", "NotFound", "NotImplemented", "NotAuthorized"];
                    readonly type: "string";
                    readonly description: "`Unknown` `NoRateDefined` `MinStayRequired` `BookingStatusUnknown` `BookingMessageTypeNotAllowed` `BookingNoRooms` `BookingCannotChangeStatus` `EnquiryAlreadyUpgraded` `BookingPaymentNotValid` `ArrivalNotValid` `DepartureNotValid` `PropertyNotAvailable` `MaxStayExceeded` `CaptchaInvalid` `StripeError` `ValidationError` `PaymentError` `ArgumentError` `NotFound` `NotImplemented` `NotAuthorized`";
                };
                readonly correlation_id: {
                    readonly type: "string";
                };
                readonly event_id: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly detail: {
                    readonly type: "string";
                };
                readonly instance: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { CreatePaymentLinkAsync, GetAllAsync, GetAllDeletedAsync, GetAllPropertiesAsync, GetAsync, GetCalendarByProperty, GetCalendarByRoomType, GetCalendarByUser, GetExternalBookingsAsync, GetPaymentLinkAsync, GetPropertyByIdV2, GetV2MessagingThreadguid, GetV2PropertiesIdRooms, GetV2QuotePropertyid, PutV2ReservationsBookingsIdCheckin, PutV2ReservationsBookingsIdCheckout, RateSettingsV2, RatesCalendarV2, UpdateKeyCodes };
