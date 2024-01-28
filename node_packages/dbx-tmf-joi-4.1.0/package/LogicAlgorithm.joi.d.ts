import * as Joi from 'joi';
export declare const LogicAlgorithmJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    algorithm: Joi.StringSchema;
    context: Joi.ObjectSchema<any>;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    language: Joi.StringSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    validFor: Joi.ObjectSchema<any>;
};
