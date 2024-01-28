import * as Joi from 'joi';
export declare const ServiceCatalog_UpdateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    relatedParty: Joi.ArraySchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
