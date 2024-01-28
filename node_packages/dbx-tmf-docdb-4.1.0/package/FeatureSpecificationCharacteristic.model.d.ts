export declare const FeatureSpecificationCharacteristicModel: {
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
};
