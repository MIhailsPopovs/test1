import * as Joi from 'joi';
export declare const Catalog_UpdateJoi: {
    '@schemaLocation': Joi.StringSchema;
    catalogType: Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    relatedParty: Joi.ArraySchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
