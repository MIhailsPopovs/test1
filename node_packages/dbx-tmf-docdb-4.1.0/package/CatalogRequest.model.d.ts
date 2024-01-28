export declare const CatalogRequestModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
    activityHistory: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            activityType: StringConstructor;
            date: DateConstructor;
            remarks: StringConstructor;
            user: StringConstructor;
        }[];
        default: any;
    };
    baseCatalogRequestId: StringConstructor;
    description: StringConstructor;
    dueDate: DateConstructor;
    id: StringConstructor;
    items: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            action: StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            type: StringConstructor;
            version: NumberConstructor;
        }[];
        default: any;
    };
    name: StringConstructor;
    status: StringConstructor;
    type: StringConstructor;
};
