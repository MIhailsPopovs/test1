export declare const QueryProductRecommendation_CreateModel: {
    '@baseType': StringConstructor;
    '@schemaLocation': StringConstructor;
    '@type': StringConstructor;
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
    instantSyncRecommendation: BooleanConstructor;
    name: StringConstructor;
    place: {
        '@baseType': StringConstructor;
        '@referredType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        name: StringConstructor;
        role: StringConstructor;
    };
    productOrder: {
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
    productOrderItem: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            entityHref: StringConstructor;
            entityId: StringConstructor;
            itemId: StringConstructor;
            name: StringConstructor;
        }[];
        default: any;
    };
    recommendationItem: {
        '#type': {
            '@baseType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            id: StringConstructor;
            priority: NumberConstructor;
            product: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                agreement: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        agreementItemId: StringConstructor;
                        href: StringConstructor;
                        id: StringConstructor;
                        name: StringConstructor;
                    }[];
                    default: any;
                };
                billingAccount: {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                };
                description: StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                isBundle: BooleanConstructor;
                isCustomerVisible: BooleanConstructor;
                name: StringConstructor;
                orderDate: DateConstructor;
                place: {
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
                product: {
                    '#type': ObjectConstructor[];
                    default: any;
                };
                productCharacteristic: {
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
                productOffering: {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                };
                productOrderItem: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        orderItemAction: StringConstructor;
                        orderItemId: StringConstructor;
                        productOrderHref: StringConstructor;
                        productOrderId: StringConstructor;
                        role: StringConstructor;
                    }[];
                    default: any;
                };
                productPrice: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        billingAccount: {
                            '@baseType': StringConstructor;
                            '@referredType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            href: StringConstructor;
                            id: StringConstructor;
                            name: StringConstructor;
                        };
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
                        productOfferingPrice: {
                            '@baseType': StringConstructor;
                            '@referredType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            href: StringConstructor;
                            id: StringConstructor;
                            name: StringConstructor;
                        };
                        productPriceAlteration: {
                            '#type': {
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
                            }[];
                            default: any;
                        };
                        recurringChargePeriod: StringConstructor;
                        unitOfMeasure: StringConstructor;
                    }[];
                    default: any;
                };
                productRelationship: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        product: ObjectConstructor;
                        relationshipType: StringConstructor;
                    }[];
                    default: any;
                };
                productSerialNumber: StringConstructor;
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
                productTerm: {
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
                realizingResource: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        href: StringConstructor;
                        id: StringConstructor;
                        name: StringConstructor;
                        value: StringConstructor;
                    }[];
                    default: any;
                };
                realizingService: {
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
                startDate: DateConstructor;
                status: StringConstructor;
                terminationDate: DateConstructor;
            };
            productOffering: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            };
        }[];
        default: any;
    };
    recommendationType: StringConstructor;
    relatedParty: {
        '@baseType': StringConstructor;
        '@referredType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        href: StringConstructor;
        id: StringConstructor;
        name: StringConstructor;
        role: StringConstructor;
    };
    shoppingCart: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
        }[];
        default: any;
    };
    shoppingCartItem: {
        '#type': {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            entityHref: StringConstructor;
            entityId: StringConstructor;
            itemId: StringConstructor;
            name: StringConstructor;
        }[];
        default: any;
    };
    state: StringConstructor;
};
