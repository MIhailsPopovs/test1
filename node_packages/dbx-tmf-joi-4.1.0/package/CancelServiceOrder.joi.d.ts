import * as Joi from 'joi';
export declare const CancelServiceOrderJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    cancellationReason: Joi.StringSchema;
    completionMessage: Joi.StringSchema;
    effectiveCancellationDate: Joi.DateSchema;
    errorMessage: Joi.ObjectSchema<any>;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    requestedCancellationDate: Joi.DateSchema;
    serviceOrder: Joi.ObjectSchema<any>;
    state: Joi.StringSchema;
};
