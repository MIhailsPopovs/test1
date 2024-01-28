import * as Joi from 'joi';
export declare const ServiceSpecification_UpdateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    constraint: Joi.ArraySchema;
    description: Joi.StringSchema;
    entitySpecRelationship: Joi.ArraySchema;
    featureSpecification: Joi.ArraySchema;
    isBundle: Joi.BooleanSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    relatedParty: Joi.ArraySchema;
    resourceSpecification: Joi.ArraySchema;
    serviceLevelSpecification: Joi.ArraySchema;
    serviceSpecRelationship: Joi.ArraySchema;
    specCharacteristic: Joi.ArraySchema;
    targetEntitySchema: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};