export declare const ProductOfferingDeleteEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
        productOffering: {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
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
            bundledProductOffering: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    bundledProductOfferingOption: {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        numberRelOfferDefault: NumberConstructor;
                        numberRelOfferLowerLimit: NumberConstructor;
                        numberRelOfferUpperLimit: NumberConstructor;
                        pricingStrategy: StringConstructor;
                    };
                    href: StringConstructor;
                    id: StringConstructor;
                    lifecycleStatus: StringConstructor;
                    name: StringConstructor;
                }[];
                default: any;
            };
            category: {
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
            channel: {
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
            description: StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            isBundle: BooleanConstructor;
            isSelective: BooleanConstructor;
            isSellable: BooleanConstructor;
            lastUpdate: DateConstructor;
            lifecycleStatus: StringConstructor;
            lineOfBusiness: {
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            };
            marketSegment: {
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
            name: StringConstructor;
            offerType: StringConstructor;
            place: {
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
            prodSpecCharValueUse: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    description: StringConstructor;
                    id: StringConstructor;
                    maxCardinality: NumberConstructor;
                    minCardinality: NumberConstructor;
                    name: StringConstructor;
                    productSpecCharacteristicValue: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            isDefault: BooleanConstructor;
                            rangeInterval: StringConstructor;
                            regex: StringConstructor;
                            unitOfMeasure: StringConstructor;
                            validFor: {
                                endDateTime: DateConstructor;
                                startDateTime: DateConstructor;
                            };
                            value: ObjectConstructor;
                            valueFrom: NumberConstructor;
                            valueTo: NumberConstructor;
                            valueType: StringConstructor;
                        }[];
                        default: any;
                    };
                    productSpecification: {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        href: StringConstructor;
                        id: StringConstructor;
                        name: StringConstructor;
                        targetProductSchema: {
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                        };
                        version: NumberConstructor;
                    };
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                    valueType: StringConstructor;
                }[];
                default: any;
            };
            productOfferingCharacteristic: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    '@valueSchemaLocation': StringConstructor;
                    configurable: BooleanConstructor;
                    description: StringConstructor;
                    extensible: BooleanConstructor;
                    id: StringConstructor;
                    isUnique: BooleanConstructor;
                    maxCardinality: NumberConstructor;
                    minCardinality: NumberConstructor;
                    name: StringConstructor;
                    productOfferingCharacteristicValue: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            isDefault: BooleanConstructor;
                            rangeInterval: StringConstructor;
                            regex: StringConstructor;
                            unitOfMeasure: StringConstructor;
                            validFor: {
                                endDateTime: DateConstructor;
                                startDateTime: DateConstructor;
                            };
                            value: ObjectConstructor;
                            valueFrom: NumberConstructor;
                            valueTo: NumberConstructor;
                            valueType: StringConstructor;
                        }[];
                        default: any;
                    };
                    productSpecCharRelationship: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            charSpecSeq: NumberConstructor;
                            href: StringConstructor;
                            id: StringConstructor;
                            name: StringConstructor;
                            relationshipType: StringConstructor;
                            validFor: {
                                endDateTime: DateConstructor;
                                startDateTime: DateConstructor;
                            };
                        }[];
                        default: any;
                    };
                    regex: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                    valueType: StringConstructor;
                }[];
                default: any;
            };
            productOfferingPrice: {
                '#type': {
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
                }[];
                default: any;
            };
            productOfferingRelationship: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                    relationshipType: StringConstructor;
                    role: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                }[];
                default: any;
            };
            productOfferingTerm: {
                '#type': {
                    '@baseType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    description: StringConstructor;
                    duration: {
                        amount: NumberConstructor;
                        units: StringConstructor;
                    };
                    name: StringConstructor;
                    validFor: {
                        endDateTime: DateConstructor;
                        startDateTime: DateConstructor;
                    };
                }[];
                default: any;
            };
            productSpecification: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
                targetProductSchema: {
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                };
                version: NumberConstructor;
            };
            resourceCandidate: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
                version: NumberConstructor;
            };
            selectiveness: {
                maxNumOfChoiceSelections: NumberConstructor;
                minNumOfChoiceSelections: NumberConstructor;
            };
            serviceCandidate: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
                version: NumberConstructor;
            };
            serviceLevelAgreement: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            };
            statusReason: StringConstructor;
            validFor: {
                endDateTime: DateConstructor;
                startDateTime: DateConstructor;
            };
            version: NumberConstructor;
        };
    };
    eventId: StringConstructor;
    eventTime: DateConstructor;
    eventType: StringConstructor;
    priority: StringConstructor;
    timeOcurred: DateConstructor;
    title: StringConstructor;
};
