import * as Joi from 'joi';
export declare const RelatedServiceOrderItemJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    itemAction: Joi.StringSchema;
    itemId: Joi.StringSchema;
    role: Joi.StringSchema;
    serviceOrderHref: Joi.StringSchema;
    serviceOrderId: Joi.StringSchema;
};
