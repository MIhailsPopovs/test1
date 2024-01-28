export declare const PromotionPatternModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
    action: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            actionEntityRef: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            };
            actionType: StringConstructor;
            actionValue: StringConstructor;
            id: StringConstructor;
        }[];
        default: any;
    };
    criteriaGroup: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            criteria: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    criteriaOperator: StringConstructor;
                    criteriaParameter: StringConstructor;
                    criteriaValue: StringConstructor;
                    id: StringConstructor;
                }[];
                default: any;
            };
            criteriaLogicalRelationship: StringConstructor;
            groupName: StringConstructor;
            id: StringConstructor;
        }[];
        default: any;
    };
    criteriaGroupLogicalRelationship: StringConstructor;
    description: StringConstructor;
    id: StringConstructor;
    name: StringConstructor;
    priority: NumberConstructor;
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
};
