import * as Joi from 'joi';
export declare const CancelServiceOrder_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    cancellationReason: Joi.StringSchema;
    requestedCancellationDate: Joi.DateSchema;
    serviceOrder: Joi.ObjectSchema<any>;
};
