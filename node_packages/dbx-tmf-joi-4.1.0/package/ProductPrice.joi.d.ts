import * as Joi from 'joi';
export declare const ProductPriceJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    billingAccount: Joi.ObjectSchema<any>;
    description: Joi.StringSchema;
    name: Joi.StringSchema;
    price: Joi.ObjectSchema<any>;
    priceType: Joi.StringSchema;
    productOfferingPrice: Joi.ObjectSchema<any>;
    productPriceAlteration: Joi.ArraySchema;
    recurringChargePeriod: Joi.StringSchema;
    unitOfMeasure: Joi.StringSchema;
};
