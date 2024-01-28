export declare const EmailModel: {
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
    name: StringConstructor;
    templates: {
        BccAddresses: {
            '#type': StringConstructor[];
            default: any;
        };
        CcAddresses: {
            '#type': StringConstructor[];
            default: any;
        };
        html: StringConstructor;
        source: StringConstructor;
        subject: StringConstructor;
        text: StringConstructor;
        toAddresses: {
            '#type': StringConstructor[];
            default: any;
        };
    };
    uid: StringConstructor;
};
