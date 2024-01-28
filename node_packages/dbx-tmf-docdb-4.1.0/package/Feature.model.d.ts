export declare const FeatureModel: {
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
};
