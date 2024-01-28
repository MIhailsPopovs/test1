import * as Joi from 'joi';
export declare const Category_UpdateJoi: {
    '@schemaLocation': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    description: Joi.StringSchema;
    isRoot: Joi.BooleanSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    parentId: Joi.StringSchema;
    productOffering: Joi.ArraySchema;
    subCategory: Joi.ArraySchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
