export declare const ServiceModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
    category: StringConstructor;
    description: StringConstructor;
    endDate: DateConstructor;
    feature: {
        '#type': {
            constraint: {
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
            featureCharacteristic: {
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
            featureRelationship: {
                '#type': {
                    id: StringConstructor;
                    name: StringConstructor;
                    relationshipType: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                }[];
                default: any;
            };
            id: StringConstructor;
            isBundle: BooleanConstructor;
            isEnabled: BooleanConstructor;
            name: StringConstructor;
        }[];
        default: any;
    };
    hasStarted: BooleanConstructor;
    href: StringConstructor;
    id: StringConstructor;
    isBundle: BooleanConstructor;
    isServiceEnabled: BooleanConstructor;
    isStateful: BooleanConstructor;
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
    place: {
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
    relatedEntity: {
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
    serviceCharacteristic: {
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
    serviceDate: StringConstructor;
    serviceOrderItem: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            itemAction: StringConstructor;
            itemId: StringConstructor;
            role: StringConstructor;
            serviceOrderHref: StringConstructor;
            serviceOrderId: StringConstructor;
        }[];
        default: any;
    };
    serviceRelationship: {
        '#type': any[];
        default: any;
    };
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
    serviceType: StringConstructor;
    startDate: DateConstructor;
    startMode: StringConstructor;
    state: StringConstructor;
    supportingResource: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            value: StringConstructor;
        }[];
        default: any;
    };
    supportingService: {
        '#type': any[];
        default: any;
    };
};
