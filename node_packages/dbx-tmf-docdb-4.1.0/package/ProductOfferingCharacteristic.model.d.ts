export declare const ProductOfferingCharacteristicModel: {
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
    productOfferingCharacteristicValue: {
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
    regex: StringConstructor;
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    valueType: StringConstructor;
};
