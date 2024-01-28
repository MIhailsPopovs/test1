export declare const POPAlterationModel: {
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
};
