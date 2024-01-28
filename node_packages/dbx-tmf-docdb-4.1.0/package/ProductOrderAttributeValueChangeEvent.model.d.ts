export declare const ProductOrderAttributeValueChangeEventModel: {
    correlationId: StringConstructor;
    description: StringConstructor;
    domain: StringConstructor;
    event: {
        productOrder: {
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
            billingAccount: {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                href: StringConstructor;
                id: StringConstructor;
                name: StringConstructor;
            };
            cancellationDate: DateConstructor;
            cancellationReason: StringConstructor;
            category: StringConstructor;
            channel: {
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
            completionDate: DateConstructor;
            description: StringConstructor;
            expectedCompletionDate: DateConstructor;
            externalId: StringConstructor;
            href: StringConstructor;
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
            notificationContact: StringConstructor;
            orderDate: DateConstructor;
            orderTotalPrice: {
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
                    priceAlteration: {
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
                    recurringChargePeriod: StringConstructor;
                    unitOfMeasure: StringConstructor;
                }[];
                default: any;
            };
            payment: {
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
            priority: StringConstructor;
            productOfferingQualification: {
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
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    action: StringConstructor;
                    appointment: {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        description: StringConstructor;
                        href: StringConstructor;
                        id: StringConstructor;
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
                    id: StringConstructor;
                    itemPrice: {
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
                            priceAlteration: {
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
                            recurringChargePeriod: StringConstructor;
                            unitOfMeasure: StringConstructor;
                        }[];
                        default: any;
                    };
                    itemTerm: {
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
                        }[];
                        default: any;
                    };
                    itemTotalPrice: {
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
                            priceAlteration: {
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
                            recurringChargePeriod: StringConstructor;
                            unitOfMeasure: StringConstructor;
                        }[];
                        default: any;
                    };
                    payment: {
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
                    productOfferingQualificationItem: {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        href: StringConstructor;
                        id: StringConstructor;
                        name: StringConstructor;
                        productOfferingQualificationHref: StringConstructor;
                        productOfferingQualificationId: StringConstructor;
                        productOfferingQualificationName: StringConstructor;
                    };
                    productOrderItem: {
                        '#type': ObjectConstructor[];
                        default: any;
                    };
                    productOrderItemRelationship: {
                        '#type': {
                            '@baseType': StringConstructor;
                            '@schemaLocation': StringConstructor;
                            '@type': StringConstructor;
                            id: StringConstructor;
                            relationshipType: StringConstructor;
                        }[];
                        default: any;
                    };
                    qualification: {
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
                    quantity: NumberConstructor;
                    quoteItem: {
                        '@baseType': StringConstructor;
                        '@referredType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        href: StringConstructor;
                        id: StringConstructor;
                        name: StringConstructor;
                        quoteHref: StringConstructor;
                        quoteId: StringConstructor;
                        quoteName: StringConstructor;
                    };
                    state: StringConstructor;
                }[];
                default: any;
            };
            quote: {
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
            requestedCompletionDate: DateConstructor;
            requestedStartDate: DateConstructor;
            state: StringConstructor;
        };
    };
    eventId: StringConstructor;
    eventTime: DateConstructor;
    eventType: StringConstructor;
    fieldPath: StringConstructor;
    priority: StringConstructor;
    timeOcurred: DateConstructor;
    title: StringConstructor;
};
