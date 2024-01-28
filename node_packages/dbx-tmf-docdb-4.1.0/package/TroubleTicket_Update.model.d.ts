export declare const TroubleTicket_UpdateModel: {
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
    channel: {
        '@baseType': StringConstructor;
        '@referredType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        name: StringConstructor;
    };
    description: StringConstructor;
    expectedResolutionDate: DateConstructor;
    externalId: StringConstructor;
    name: StringConstructor;
    note: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            author: StringConstructor;
            date: DateConstructor;
            id: StringConstructor;
            text: StringConstructor;
        }[];
        default: any;
    };
    priority: StringConstructor;
    relatedEntity: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            role: StringConstructor;
        }[];
        default: any;
    };
    relatedParty: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            role: StringConstructor;
        }[];
        default: any;
    };
    requestedResolutionDate: DateConstructor;
    resolutionDate: DateConstructor;
    severity: StringConstructor;
    status: StringConstructor;
    statusChangeReason: StringConstructor;
    ticketType: StringConstructor;
    troubleTicketRelationship: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            relationshipType: StringConstructor;
        }[];
        default: any;
    };
};
