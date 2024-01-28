export declare const ResourceRelationshipModel: {
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
};
