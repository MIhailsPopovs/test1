export declare const ServiceOrderItemModel: {
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
};
