export declare const ServiceOrderMilestoneModel: {
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
};
