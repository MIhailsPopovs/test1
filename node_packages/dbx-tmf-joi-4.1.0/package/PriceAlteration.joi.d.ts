import * as Joi from 'joi';
export declare const PriceAlterationJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    applicationDuration: Joi.NumberSchema;
    description: Joi.StringSchema;
    name: Joi.StringSchema;
    price: Joi.ObjectSchema<any>;
    priceType: Joi.StringSchema;
    priority: Joi.NumberSchema;
    productOfferingPrice: Joi.ObjectSchema<any>;
    recurringChargePeriod: Joi.StringSchema;
    unitOfMeasure: Joi.StringSchema;
};
