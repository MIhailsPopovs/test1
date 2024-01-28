export declare const ProductOfferingPriceRefOrValueModel: {
    '@baseType': StringConstructor;
    '@referredType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
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
    lastUpdate: DateConstructor;
    lifecycleStatus: StringConstructor;
    name: StringConstructor;
    price: {
        '@baseType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        dutyFreeAmount: {
            unit: StringConstructor;
            value: NumberConstructor;
        };
        percentage: NumberConstructor;
        taxCategory: StringConstructor;
        taxIncludedAmount: {
            unit: StringConstructor;
            value: NumberConstructor;
        };
        taxRate: NumberConstructor;
    };
    priceAlteration: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            applicationDuration: {
                amount: NumberConstructor;
                units: StringConstructor;
            };
            description: StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            price: {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                dutyFreeAmount: {
                    unit: StringConstructor;
                    value: NumberConstructor;
                };
                percentage: NumberConstructor;
                taxCategory: StringConstructor;
                taxIncludedAmount: {
                    unit: StringConstructor;
                    value: NumberConstructor;
                };
                taxRate: NumberConstructor;
            };
            priceType: StringConstructor;
            priority: NumberConstructor;
            recurringChargePeriod: StringConstructor;
            unitOfMeasure: {
                amount: NumberConstructor;
                units: StringConstructor;
            };
            validFor: {
                endDateTime: DateConstructor;
                startDateTime: DateConstructor;
            };
        }[];
        default: any;
    };
    priceType: StringConstructor;
    recurringChargePeriod: StringConstructor;
    recurringChargePeriodLength: NumberConstructor;
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
