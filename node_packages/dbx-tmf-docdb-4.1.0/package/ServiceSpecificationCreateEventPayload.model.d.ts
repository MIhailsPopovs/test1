export declare const ServiceSpecificationCreateEventPayloadModel: {
    serviceSpecification: {
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
        entitySpecRelationship: {
            '#type': {
                '@baseType': StringConstructor;
                '@referredType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                associationSpec: {
                    '@baseType': StringConstructor;
                    '@referredType': StringConstructor;
                    '@schemaLocation': StringConstructor;
                    '@type': StringConstructor;
                    href: StringConstructor;
                    id: StringConstructor;
                    name: StringConstructor;
                };
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
        featureSpecification: {
            '#type': {
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
                featureSpecCharacteristic: {
                    '#type': {
                        '@baseType': StringConstructor;
                        '@schemaLocation': StringConstructor;
                        '@type': StringConstructor;
                        '@valueSchemaLocation': StringConstructor;
                        configurable: BooleanConstructor;
                        description: StringConstructor;
                        extensible: BooleanConstructor;
                        featureSpecCharRelationship: {
                            '#type': {
                                characteristicId: StringConstructor;
                                featureId: StringConstructor;
                                name: StringConstructor;
                                relationshipType: StringConstructor;
                                resourceSpecificationHref: StringConstructor;
                                resourceSpecificationId: StringConstructor;
                                validFor: {
                                    endDateTime: DateConstructor;
                                    startDateTime: DateConstructor;
                                };
                            }[];
                            default: any;
                        };
                        featureSpecCharacteristicValue: {
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
                        id: StringConstructor;
                        isUnique: BooleanConstructor;
                        maxCardinality: NumberConstructor;
                        minCardinality: NumberConstructor;
                        name: StringConstructor;
                        regex: StringConstructor;
                        validFor: {
                            endDateTime: DateConstructor;
                            startDateTime: DateConstructor;
                        };
                        valueType: StringConstructor;
                    }[];
                    default: any;
                };
                featureSpecRelationship: {
                    '#type': {
                        featureId: StringConstructor;
                        name: StringConstructor;
                        parentSpecificationHref: StringConstructor;
                        parentSpecificationId: StringConstructor;
                        relationshipType: StringConstructor;
                        validFor: {
                            endDateTime: DateConstructor;
                            startDateTime: DateConstructor;
                        };
                    }[];
                    default: any;
                };
                id: StringConstructor;
                isBundle: BooleanConstructor;
                isEnabled: BooleanConstructor;
                name: StringConstructor;
                validFor: {
                    endDateTime: DateConstructor;
                    startDateTime: DateConstructor;
                };
                version: NumberConstructor;
            }[];
            default: any;
        };
        href: StringConstructor;
        id: StringConstructor;
        isBundle: BooleanConstructor;
        lastUpdate: DateConstructor;
        lifecycleStatus: StringConstructor;
        name: StringConstructor;
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
        resourceSpecification: {
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
        serviceLevelSpecification: {
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
        serviceSpecRelationship: {
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
        specCharacteristic: {
            '#type': {
                '@baseType': StringConstructor;
                '@schemaLocation': StringConstructor;
                '@type': StringConstructor;
                '@valueSchemaLocation': StringConstructor;
                charSpecRelationship: {
                    '#type': {
                        characteristicSpecificationId: StringConstructor;
                        name: StringConstructor;
                        parentSpecificationHref: StringConstructor;
                        parentSpecificationId: StringConstructor;
                        relationshipType: StringConstructor;
                        validFor: {
                            endDateTime: DateConstructor;
                            startDateTime: DateConstructor;
                        };
                    }[];
                    default: any;
                };
                characteristicValueSpecification: {
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
                configurable: BooleanConstructor;
                description: StringConstructor;
                extensible: BooleanConstructor;
                id: StringConstructor;
                isUnique: BooleanConstructor;
                maxCardinality: NumberConstructor;
                minCardinality: NumberConstructor;
                name: StringConstructor;
                regex: StringConstructor;
                validFor: {
                    endDateTime: DateConstructor;
                    startDateTime: DateConstructor;
                };
                valueType: StringConstructor;
            }[];
            default: any;
        };
        targetEntitySchema: {
            '@schemaLocation': StringConstructor;
            '@type': StringConstructor;
        };
        validFor: {
            endDateTime: DateConstructor;
            startDateTime: DateConstructor;
        };
        version: NumberConstructor;
    };
};
