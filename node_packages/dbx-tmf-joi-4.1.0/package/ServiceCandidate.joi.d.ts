import * as Joi from 'joi';
export declare const ServiceCandidateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    serviceSpecification: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
