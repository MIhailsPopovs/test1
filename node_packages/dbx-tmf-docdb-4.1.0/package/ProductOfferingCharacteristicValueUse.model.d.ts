export declare const ProductOfferingCharacteristicValueUseModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
    description: StringConstructor;
    id: StringConstructor;
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
    productSpecification: {
        '@baseType': StringConstructor;
        '@referredType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        name: StringConstructor;
        targetProductSchema: {
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
        };
        version: NumberConstructor;
    };
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    valueType: StringConstructor;
};
