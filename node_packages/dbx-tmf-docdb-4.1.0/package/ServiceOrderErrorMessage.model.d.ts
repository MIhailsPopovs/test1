export declare const ServiceOrderErrorMessageModel: {
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
};
