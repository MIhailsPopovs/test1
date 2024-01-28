import * as Joi from 'joi';
export declare const POPAlterationJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    applicationDuration: Joi.ObjectSchema<any>;
    description: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    name: Joi.StringSchema;
    price: Joi.ObjectSchema<any>;
    priceType: Joi.StringSchema;
    priority: Joi.NumberSchema;
    recurringChargePeriod: Joi.StringSchema;
    unitOfMeasure: Joi.ObjectSchema<any>;
    validFor: Joi.ObjectSchema<any>;
};
