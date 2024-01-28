export declare const CancelProductOrderCreateEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
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
    eventId: StringConstructor;
    eventTime: DateConstructor;
    eventType: StringConstructor;
    href: StringConstructor;
    id: StringConstructor;
    priority: StringConstructor;
    timeOcurred: DateConstructor;
    title: StringConstructor;
};
