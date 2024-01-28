import * as Joi from 'joi';
export declare const TaxItemJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    taxAmount: Joi.ObjectSchema<any>;
    taxCategory: Joi.StringSchema;
    taxRate: Joi.NumberSchema;
};
