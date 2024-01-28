export declare const FeatureSpecificationModel: {
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
    featureSpecCharacteristic: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            '@valueSchemaLocation': StringConstructor;
            configurable: BooleanConstructor;
            description: StringConstructor;
            extensible: BooleanConstructor;
            featureSpecCharRelationship: {
                '#type': {
                    characteristicId: StringConstructor;
                    featureId: StringConstructor;
                    name: StringConstructor;
                    relationshipType: StringConstructor;
                    resourceSpecificationHref: StringConstructor;
                    resourceSpecificationId: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                }[];
                default: any;
            };
            featureSpecCharacteristicValue: {
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
    featureSpecRelationship: {
        '#type': {
            featureId: StringConstructor;
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
    id: StringConstructor;
    isBundle: BooleanConstructor;
    isEnabled: BooleanConstructor;
    name: StringConstructor;
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    version: NumberConstructor;
};
