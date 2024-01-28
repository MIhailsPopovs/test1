export declare const ServiceOrder_UpdateModel: {
    description: StringConstructor;
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
    state: StringConstructor;
};
