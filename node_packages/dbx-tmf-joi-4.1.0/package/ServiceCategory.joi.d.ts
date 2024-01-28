import * as Joi from 'joi';
export declare const ServiceCategoryJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    category: Joi.ArraySchema;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    isRoot: Joi.BooleanSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    parentId: Joi.StringSchema;
    serviceCandidate: Joi.ArraySchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
