export declare const ServiceCatalogBatchEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
        serviceCatalog: {
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
            href: StringConstructor;
            id: StringConstructor;
            lastUpdate: DateConstructor;
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
    };
    eventId: StringConstructor;
    eventTime: DateConstructor;
    eventType: StringConstructor;
    priority: StringConstructor;
    timeOcurred: DateConstructor;
    title: StringConstructor;
};
