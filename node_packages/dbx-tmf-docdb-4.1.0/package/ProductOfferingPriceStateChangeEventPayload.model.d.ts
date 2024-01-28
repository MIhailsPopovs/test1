export declare const ProductOfferingPriceStateChangeEventPayloadModel: {
    productOfferingPrice: {
        '@baseType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        bundledPopRelationship: {
            '#type': {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            }[];
            default: any;
        };
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
        description: StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        isBundle: BooleanConstructor;
        lastUpdate: DateConstructor;
        lifecycleStatus: StringConstructor;
        name: StringConstructor;
        percentage: NumberConstructor;
        place: {
            '#type': {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            }[];
            default: any;
        };
        popRelationship: {
            '#type': {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
                relationshipType: StringConstructor;
                role: StringConstructor;
            }[];
            default: any;
        };
        price: {
            unit: StringConstructor;
            value: NumberConstructor;
        };
        priceType: StringConstructor;
        pricingLogicAlgorithm: {
            '#type': {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                description: StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
                plaSpecId: StringConstructor;
                validFor: {
                    endDateTime: DateConstructor;
                    startDateTime: DateConstructor;
                };
            }[];
            default: any;
        };
        prodSpecCharValueUse: {
            '#type': {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                description: StringConstructor;
                id: StringConstructor;
                maxCardinality: NumberConstructor;
                minCardinality: NumberConstructor;
                name: StringConstructor;
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
            }[];
            default: any;
        };
        productOfferingTerm: {
            '#type': {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                description: StringConstructor;
                duration: {
                    amount: NumberConstructor;
                    units: StringConstructor;
                };
                name: StringConstructor;
                validFor: {
                    endDateTime: DateConstructor;
                    startDateTime: DateConstructor;
                };
            }[];
            default: any;
        };
        recurringChargePeriodLength: NumberConstructor;
        recurringChargePeriodType: StringConstructor;
        tax: {
            '#type': {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                taxAmount: {
                    unit: StringConstructor;
                    value: NumberConstructor;
                };
                taxCategory: StringConstructor;
                taxRate: NumberConstructor;
            }[];
            default: any;
        };
        unitOfMeasure: {
            amount: NumberConstructor;
            units: StringConstructor;
        };
        validFor: {
            endDateTime: DateConstructor;
            startDateTime: DateConstructor;
        };
        version: NumberConstructor;
    };
};
