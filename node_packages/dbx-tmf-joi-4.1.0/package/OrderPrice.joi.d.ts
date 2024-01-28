import * as Joi from 'joi';
export declare const OrderPriceJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    billingAccount: Joi.ObjectSchema<any>;
    description: Joi.StringSchema;
    name: Joi.StringSchema;
    price: Joi.ObjectSchema<any>;
    priceAlteration: Joi.ArraySchema;
    priceType: Joi.StringSchema;
    productOfferingPrice: Joi.ObjectSchema<any>;
    recurringChargePeriod: Joi.StringSchema;
    unitOfMeasure: Joi.StringSchema;
};
