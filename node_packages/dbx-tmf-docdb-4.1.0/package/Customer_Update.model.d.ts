export declare const Customer_UpdateModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
    account: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            description: StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
        }[];
        default: any;
    };
    agreement: {
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
    characteristic: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            characteristicRelationship: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    id: StringConstructor;
                    relationshipType: StringConstructor;
                }[];
                default: any;
            };
            id: StringConstructor;
            name: StringConstructor;
            value: ObjectConstructor;
            valueType: StringConstructor;
        }[];
        default: any;
    };
    contactMedium: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            characteristic: {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                city: StringConstructor;
                contactType: StringConstructor;
                country: StringConstructor;
                emailAddress: StringConstructor;
                faxNumber: StringConstructor;
                phoneNumber: StringConstructor;
                postCode: StringConstructor;
                socialNetworkId: StringConstructor;
                stateOrProvince: StringConstructor;
                street1: StringConstructor;
                street2: StringConstructor;
            };
            mediumType: StringConstructor;
            preferred: BooleanConstructor;
            validFor: {
                endDateTime: DateConstructor;
                startDateTime: DateConstructor;
            };
        }[];
        default: any;
    };
    creditProfile: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            creditProfileDate: DateConstructor;
            creditRiskRating: NumberConstructor;
            creditScore: NumberConstructor;
            validFor: {
                endDateTime: DateConstructor;
                startDateTime: DateConstructor;
            };
        }[];
        default: any;
    };
    engagedParty: {
        '@baseType': StringConstructor;
        '@referredType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        name: StringConstructor;
        role: StringConstructor;
    };
    name: StringConstructor;
    paymentMethod: {
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
    status: StringConstructor;
    statusReason: StringConstructor;
    validFor: {
        endDateTime: DateConstructor;
        startDateTime: DateConstructor;
    };
};
