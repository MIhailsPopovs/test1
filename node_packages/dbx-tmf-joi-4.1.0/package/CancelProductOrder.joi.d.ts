import * as Joi from 'joi';
export declare const CancelProductOrderJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    cancellationReason: Joi.StringSchema;
    effectiveCancellationDate: Joi.DateSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    productOrder: Joi.ObjectSchema<any>;
    requestedCancellationDate: Joi.DateSchema;
    state: Joi.StringSchema;
};
