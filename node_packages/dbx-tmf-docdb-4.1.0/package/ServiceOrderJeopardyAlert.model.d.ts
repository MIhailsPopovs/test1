export declare const ServiceOrderJeopardyAlertModel: {
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
};
