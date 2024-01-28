import * as Joi from 'joi';
export declare const ProductPriceValueJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    dutyFreeAmount: Joi.ObjectSchema<any>;
    percentage: Joi.NumberSchema;
    taxCategory: Joi.StringSchema;
    taxIncludedAmount: Joi.ObjectSchema<any>;
    taxRate: Joi.NumberSchema;
};
