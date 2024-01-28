export declare const CharacteristicSpecificationModel: {
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
};
