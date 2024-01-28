import * as Joi from 'joi';
export declare const CreditProfileJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    creditProfileDate: Joi.DateSchema;
    creditRiskRating: Joi.NumberSchema;
    creditScore: Joi.NumberSchema;
    validFor: Joi.ObjectSchema<any>;
};
