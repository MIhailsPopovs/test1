import * as Joi from 'joi';
export declare const ServiceCandidate_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    serviceSpecification: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
