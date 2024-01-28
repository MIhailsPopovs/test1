import * as Joi from 'joi';
export declare const CancelProductOrder_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    cancellationReason: Joi.StringSchema;
    productOrder: Joi.ObjectSchema<any>;
    requestedCancellationDate: Joi.DateSchema;
};
