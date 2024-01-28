import * as Joi from 'joi';
export declare const ServiceOrderItemRefJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    itemId: Joi.StringSchema;
    serviceOrderHref: Joi.StringSchema;
    serviceOrderId: Joi.StringSchema;
};
