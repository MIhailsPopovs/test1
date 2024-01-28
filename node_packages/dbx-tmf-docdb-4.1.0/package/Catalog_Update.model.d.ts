export declare const Catalog_UpdateModel: {
    '@schemaLocation': StringConstructor;
    catalogType: StringConstructor;
    category: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            version: NumberConstructor;
        }[];
        default: any;
    };
    description: StringConstructor;
    lifecycleStatus: StringConstructor;
    name: StringConstructor;
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
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    version: NumberConstructor;
};
