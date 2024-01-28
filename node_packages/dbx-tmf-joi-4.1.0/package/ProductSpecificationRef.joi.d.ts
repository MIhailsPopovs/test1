import * as Joi from 'joi';
export declare const ProductSpecificationRefJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    targetProductSchema: Joi.ObjectSchema<any>;
    version: Joi.NumberSchema;
};
