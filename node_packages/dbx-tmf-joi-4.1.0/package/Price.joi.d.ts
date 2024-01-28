import * as Joi from 'joi';
export declare const PriceJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    dutyFreeAmount: Joi.ObjectSchema<any>;
    percentage: Joi.NumberSchema;
    taxIncludedAmount: Joi.ObjectSchema<any>;
    taxRate: Joi.NumberSchema;
};
