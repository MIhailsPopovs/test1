export declare const PhysicalResourceCreateEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
        physicalResource: {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            administrativeState: StringConstructor;
            attachment: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    attachmentType: StringConstructor;
                    content: StringConstructor;
                    description: StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    lifecycleStatus: StringConstructor;
                    mimeType: StringConstructor;
                    name: StringConstructor;
                    size: {
                        amount: NumberConstructor;
                        units: StringConstructor;
                    };
                    url: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                }[];
                default: any;
            };
            category: StringConstructor;
            description: StringConstructor;
            endOperatingDate: DateConstructor;
            href: StringConstructor;
            id: StringConstructor;
            manufactureDate: DateConstructor;
            name: StringConstructor;
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
            operationalState: StringConstructor;
            place: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
                role: StringConstructor;
            };
            powerState: StringConstructor;
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
            resourceCharacteristic: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    characteristicRelationship: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            id: StringConstructor;
                            relationshipType: StringConstructor;
                        }[];
                        default: any;
                    };
                    id: StringConstructor;
                    name: StringConstructor;
                    value: ObjectConstructor;
                    valueType: StringConstructor;
                }[];
                default: any;
            };
            resourceRelationship: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    relationshipType: StringConstructor;
                    resourceRelationshipCharacteristic: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            characteristicRelationship: {
                                '#type': {
                                    '@baseType': StringConstructor;
                                    '@schemaLocation': StringConstructor;
                                    '@type': StringConstructor;
                                    id: StringConstructor;
                                    relationshipType: StringConstructor;
                                }[];
                                default: any;
                            };
                            id: StringConstructor;
                            name: StringConstructor;
                            value: ObjectConstructor;
                            valueType: StringConstructor;
                        }[];
                        default: any;
                    };
                }[];
                default: any;
            };
            resourceSpecification: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
                version: NumberConstructor;
            };
            resourceStatus: StringConstructor;
            resourceVersion: StringConstructor;
            serialNumber: StringConstructor;
            startOperatingDate: DateConstructor;
            usageState: StringConstructor;
            versionNumber: StringConstructor;
        };
    };
    eventId: StringConstructor;
    eventTime: DateConstructor;
    eventType: StringConstructor;
    href: StringConstructor;
    id: StringConstructor;
    priority: StringConstructor;
    timeOcurred: DateConstructor;
    title: StringConstructor;
};
