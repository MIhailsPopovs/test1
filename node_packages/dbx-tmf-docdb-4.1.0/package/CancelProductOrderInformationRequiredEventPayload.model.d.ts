export declare const CancelProductOrderInformationRequiredEventPayloadModel: {
    cancelProductOrder: {
        '@baseType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        cancellationReason: StringConstructor;
        effectiveCancellationDate: DateConstructor;
        href: StringConstructor;
        id: StringConstructor;
        productOrder: {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
        };
        requestedCancellationDate: DateConstructor;
        state: StringConstructor;
    };
};
