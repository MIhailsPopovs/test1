import * as Joi from 'joi';
export declare const ServiceCandidate_UpdateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    serviceSpecification: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
