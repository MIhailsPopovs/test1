import * as Joi from 'joi';
export declare const ServiceCategory_UpdateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    isRoot: Joi.BooleanSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    parentId: Joi.StringSchema;
    serviceCandidate: Joi.ArraySchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
