export declare const Category_UpdateModel: {
    '@schemaLocation': StringConstructor;
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
    isRoot: BooleanConstructor;
    lifecycleStatus: StringConstructor;
    name: StringConstructor;
    parentId: StringConstructor;
    productOffering: {
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
    subCategory: {
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
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
    version: NumberConstructor;
};
