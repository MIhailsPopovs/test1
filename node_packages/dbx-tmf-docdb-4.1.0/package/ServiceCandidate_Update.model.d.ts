export declare const ServiceCandidate_UpdateModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
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
    serviceSpecification: {
        '@baseType': StringConstructor;
        '@referredType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        name: StringConstructor;
        version: NumberConstructor;
    };
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    version: NumberConstructor;
};
