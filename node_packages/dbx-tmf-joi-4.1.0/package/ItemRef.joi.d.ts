import * as Joi from 'joi';
export declare const ItemRefJoi: {
    '@baseType': Joi.StringSchema;
    '@referredType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    entityHref: Joi.StringSchema;
    entityId: Joi.StringSchema;
    itemId: Joi.StringSchema;
    name: Joi.StringSchema;
};
