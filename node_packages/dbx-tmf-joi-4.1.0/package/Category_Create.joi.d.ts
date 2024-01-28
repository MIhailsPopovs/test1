import * as Joi from 'joi';
export declare const Category_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    description: Joi.StringSchema;
    isRoot: Joi.BooleanSchema;
    lastUpdate: Joi.DateSchema;
    lifecycleStatus: Joi.StringSchema;
    name: Joi.StringSchema;
    parentId: Joi.StringSchema;
    productOffering: Joi.ArraySchema;
    subCategory: Joi.ArraySchema;
    validFor: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
