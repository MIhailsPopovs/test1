export declare const PromotionCreateEventPayloadModel: {
    promotion: {
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
        description: StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        lastUpdate: DateConstructor;
        lifecycleStatus: StringConstructor;
        name: StringConstructor;
        pattern: {
            '#type': {
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
            }[];
            default: any;
        };
        promotionType: StringConstructor;
        validFor: {
            endDateTime: DateConstructor;
            startDateTime: DateConstructor;
        };
    };
};
