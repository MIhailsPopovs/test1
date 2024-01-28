export declare const EntitySpecificationModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
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
    description: StringConstructor;
    entitySpecRelationship: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            associationSpec: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            };
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            relationshipType: StringConstructor;
            role: StringConstructor;
            validFor: {
                endDateTime: DateConstructor;
                startDateTime: DateConstructor;
            };
        }[];
        default: any;
    };
    href: StringConstructor;
    id: StringConstructor;
    isBundle: BooleanConstructor;
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
    specCharacteristic: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            '@valueSchemaLocation': StringConstructor;
            charSpecRelationship: {
                '#type': {
                    characteristicSpecificationId: StringConstructor;
                    name: StringConstructor;
                    parentSpecificationHref: StringConstructor;
                    parentSpecificationId: StringConstructor;
                    relationshipType: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                }[];
                default: any;
            };
            characteristicValueSpecification: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    isDefault: BooleanConstructor;
                    rangeInterval: StringConstructor;
                    regex: StringConstructor;
                    unitOfMeasure: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                    value: ObjectConstructor;
                    valueFrom: NumberConstructor;
                    valueTo: NumberConstructor;
                    valueType: StringConstructor;
                }[];
                default: any;
            };
            configurable: BooleanConstructor;
            description: StringConstructor;
            extensible: BooleanConstructor;
            id: StringConstructor;
            isUnique: BooleanConstructor;
            maxCardinality: NumberConstructor;
            minCardinality: NumberConstructor;
            name: StringConstructor;
            regex: StringConstructor;
            validFor: {
                endDateTime: DateConstructor;
                startDateTime: DateConstructor;
            };
            valueType: StringConstructor;
        }[];
        default: any;
    };
    targetEntitySchema: {
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
    };
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    version: NumberConstructor;
};
