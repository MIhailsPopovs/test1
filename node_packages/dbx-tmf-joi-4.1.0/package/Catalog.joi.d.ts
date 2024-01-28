import * as Joi from 'joi';
export declare const CatalogJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    catalogType: Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    relatedParty: Joi.ArraySchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
