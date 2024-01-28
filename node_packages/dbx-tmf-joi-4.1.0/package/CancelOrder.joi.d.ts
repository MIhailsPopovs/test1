import * as Joi from 'joi';
export declare const CancelOrderJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    cancellationReason: Joi.StringSchema;
    effectiveCancellationDate: Joi.DateSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    requestedCancellationDate: Joi.DateSchema;
    state: Joi.StringSchema;
};
