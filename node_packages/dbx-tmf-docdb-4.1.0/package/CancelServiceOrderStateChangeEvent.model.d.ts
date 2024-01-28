export declare const CancelServiceOrderStateChangeEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
        cancelServiceOrder: {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            cancellationReason: StringConstructor;
            completionMessage: StringConstructor;
            effectiveCancellationDate: DateConstructor;
            errorMessage: {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                code: StringConstructor;
                message: StringConstructor;
                reason: StringConstructor;
                referenceError: StringConstructor;
                status: StringConstructor;
            };
            href: StringConstructor;
            id: StringConstructor;
            requestedCancellationDate: DateConstructor;
            serviceOrder: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            };
            state: StringConstructor;
        };
    };
    eventId: StringConstructor;
    eventTime: DateConstructor;
    eventType: StringConstructor;
    priority: StringConstructor;
    timeOcurred: DateConstructor;
    title: StringConstructor;
};
