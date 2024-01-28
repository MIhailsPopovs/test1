import * as Joi from 'joi';
export declare const ServiceOrderErrorMessageJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    code: Joi.StringSchema;
    message: Joi.StringSchema;
    reason: Joi.StringSchema;
    referenceError: Joi.StringSchema;
    serviceOrderItem: Joi.ArraySchema;
    status: Joi.StringSchema;
    timestamp: Joi.DateSchema;
};
