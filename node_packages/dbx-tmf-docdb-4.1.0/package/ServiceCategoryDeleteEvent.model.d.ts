export declare const ServiceCategoryDeleteEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
        serviceCategory: {
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
            isRoot: BooleanConstructor;
            lastUpdate: DateConstructor;
            lifecycleStatus: StringConstructor;
            name: StringConstructor;
            parentId: StringConstructor;
            serviceCandidate: {
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
