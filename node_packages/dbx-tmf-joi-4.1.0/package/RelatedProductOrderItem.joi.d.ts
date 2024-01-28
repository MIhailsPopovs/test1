import * as Joi from 'joi';
export declare const RelatedProductOrderItemJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    orderItemAction: Joi.StringSchema;
    orderItemId: Joi.StringSchema;
    productOrderHref: Joi.StringSchema;
    productOrderId: Joi.StringSchema;
    role: Joi.StringSchema;
};
