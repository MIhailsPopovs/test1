export declare const ProductOfferingQualificationDeleteEventPayloadModel: {
    productOfferingQualification: {
        '@baseType': StringConstructor;
        '@schemaLocation': StringConstructor;
        '@type': StringConstructor;
        category: {
            '@baseType': StringConstructor;
            '@referredType': StringConstructor;
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
            href: StringConstructor;
            id: StringConstructor;
            name: StringConstructor;
            version: NumberConstructor;
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
        effectiveQualificationDate: DateConstructor;
        expectedPOQCompletionDate: DateConstructor;
        expirationDate: DateConstructor;
        href: StringConstructor;
        id: StringConstructor;
        instantSyncQualification: BooleanConstructor;
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
        productOfferingQualificationDate: DateConstructor;
        productOfferingQualificationItem: {
            '#type': {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                action: StringConstructor;
                alternateProductOfferingProposal: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        alternateActivationDate: DateConstructor;
                        alternateProduct: {
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
                        alternateProductOffering: {
                            '@baseType': StringConstructor;
                            '@referredType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            href: StringConstructor;
                            id: StringConstructor;
                            name: StringConstructor;
                        };
                        id: StringConstructor;
                    }[];
                    default: any;
                };
                eligibilityUnavailabilityReason: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        code: StringConstructor;
                        label: StringConstructor;
                    }[];
                    default: any;
                };
                expectedActivationDate: DateConstructor;
                id: StringConstructor;
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
                qualificationItemRelationship: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        id: StringConstructor;
                        relationshipType: StringConstructor;
                    }[];
                    default: any;
                };
                qualificationItemResult: StringConstructor;
                state: StringConstructor;
                terminationError: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        id: StringConstructor;
                        value: StringConstructor;
                    }[];
                    default: any;
                };
            }[];
            default: any;
        };
        provideAlternative: BooleanConstructor;
        provideOnlyAvailable: BooleanConstructor;
        provideUnavailabilityReason: BooleanConstructor;
        qualificationResult: StringConstructor;
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
        requestedPOQCompletionDate: DateConstructor;
        state: StringConstructor;
    };
};
