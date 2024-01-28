export declare const ServiceOrderAttributeValueChangeEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
        serviceOrder: {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            cancellationDate: DateConstructor;
            cancellationReason: StringConstructor;
            category: StringConstructor;
            completionDate: DateConstructor;
            description: StringConstructor;
            errorMessage: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    code: StringConstructor;
                    message: StringConstructor;
                    reason: StringConstructor;
                    referenceError: StringConstructor;
                    serviceOrderItem: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@referredType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            itemId: StringConstructor;
                            serviceOrderHref: StringConstructor;
                            serviceOrderId: StringConstructor;
                        }[];
                        default: any;
                    };
                    status: StringConstructor;
                    timestamp: DateConstructor;
                }[];
                default: any;
            };
            expectedCompletionDate: DateConstructor;
            externalId: StringConstructor;
            externalReference: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    externalReferenceType: StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                }[];
                default: any;
            };
            href: StringConstructor;
            id: StringConstructor;
            jeopardyAlert: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    alertDate: DateConstructor;
                    exception: StringConstructor;
                    id: StringConstructor;
                    jeopardyType: StringConstructor;
                    message: StringConstructor;
                    name: StringConstructor;
                    serviceOrderItem: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@referredType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            itemId: StringConstructor;
                            serviceOrderHref: StringConstructor;
                            serviceOrderId: StringConstructor;
                        }[];
                        default: any;
                    };
                }[];
                default: any;
            };
            milestone: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    description: StringConstructor;
                    id: StringConstructor;
                    message: StringConstructor;
                    milestoneDate: DateConstructor;
                    name: StringConstructor;
                    serviceOrderItem: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@referredType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            itemId: StringConstructor;
                            serviceOrderHref: StringConstructor;
                            serviceOrderId: StringConstructor;
                        }[];
                        default: any;
                    };
                    status: StringConstructor;
                }[];
                default: any;
            };
            note: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    author: StringConstructor;
                    date: DateConstructor;
                    id: StringConstructor;
                    text: StringConstructor;
                }[];
                default: any;
            };
            notificationContact: StringConstructor;
            orderDate: DateConstructor;
            orderRelationship: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    relationshipType: StringConstructor;
                }[];
                default: any;
            };
            priority: StringConstructor;
            relatedParty: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                    role: StringConstructor;
                }[];
                default: any;
            };
            requestedCompletionDate: DateConstructor;
            requestedStartDate: DateConstructor;
            serviceOrderItem: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    action: StringConstructor;
                    appointment: {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        description: StringConstructor;
                        href: StringConstructor;
                        id: StringConstructor;
                    };
                    errorMessage: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            code: StringConstructor;
                            message: StringConstructor;
                            reason: StringConstructor;
                            referenceError: StringConstructor;
                            status: StringConstructor;
                            timestamp: DateConstructor;
                        }[];
                        default: any;
                    };
                    id: StringConstructor;
                    quantity: NumberConstructor;
                    service: any;
                    serviceOrderItem: {
                        '#type': ObjectConstructor[];
                        default: any;
                    };
                    serviceOrderItemRelationship: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            orderItem: {
                                '@baseType': StringConstructor;
                                '@referredType': StringConstructor;
                                '@schemaLocation': StringConstructor;
                                '@type': StringConstructor;
                                itemId: StringConstructor;
                                serviceOrderHref: StringConstructor;
                                serviceOrderId: StringConstructor;
                            };
                            relationshipType: StringConstructor;
                        }[];
                        default: any;
                    };
                    state: StringConstructor;
                }[];
                default: any;
            };
            startDate: DateConstructor;
            state: StringConstructor;
        };
    };
    eventId: StringConstructor;
    eventTime: DateConstructor;
    eventType: StringConstructor;
    fieldPath: StringConstructor;
    priority: StringConstructor;
    timeOcurred: DateConstructor;
    title: StringConstructor;
};
