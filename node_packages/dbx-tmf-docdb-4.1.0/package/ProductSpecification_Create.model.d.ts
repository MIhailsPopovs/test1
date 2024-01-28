export declare const ProductSpecification_CreateModel: {
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
    brand: StringConstructor;
    bundledProductSpecification: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            lifecycleStatus: StringConstructor;
            name: StringConstructor;
        }[];
        default: any;
    };
    description: StringConstructor;
    isBundle: BooleanConstructor;
    lastUpdate: DateConstructor;
    lifecycleStatus: StringConstructor;
    name: StringConstructor;
    productNumber: StringConstructor;
    productSpecCharacteristic: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            '@valueSchemaLocation': StringConstructor;
            configurable: BooleanConstructor;
            description: StringConstructor;
            extensible: BooleanConstructor;
            id: StringConstructor;
            isUnique: BooleanConstructor;
            maxCardinality: NumberConstructor;
            minCardinality: NumberConstructor;
            name: StringConstructor;
            productSpecCharRelationship: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    charSpecSeq: NumberConstructor;
                    href: StringConstructor;
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
            productSpecCharacteristicValue: {
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
            regex: StringConstructor;
            validFor: {
                endDateTime: DateConstructor;
                startDateTime: DateConstructor;
            };
            valueType: StringConstructor;
        }[];
        default: any;
    };
    productSpecificationRelationship: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
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
    resourceSpecification: {
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
    serviceSpecification: {
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
    targetProductSchema: {
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
    };
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    version: NumberConstructor;
};
