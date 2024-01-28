export declare const PriceAlterationModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
    applicationDuration: NumberConstructor;
    description: StringConstructor;
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
        taxIncludedAmount: {
            unit: StringConstructor;
            value: NumberConstructor;
        };
        taxRate: NumberConstructor;
    };
    priceType: StringConstructor;
    priority: NumberConstructor;
    productOfferingPrice: {
        '@baseType': StringConstructor;
        '@referredType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        name: StringConstructor;
    };
    recurringChargePeriod: StringConstructor;
    unitOfMeasure: StringConstructor;
};
