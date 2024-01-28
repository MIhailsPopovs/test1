import * as Joi from 'joi';
export declare const ProductOrderJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    agreement: Joi.ArraySchema;
    billingAccount: Joi.ObjectSchema<any>;
    cancellationDate: Joi.DateSchema;
    cancellationReason: Joi.StringSchema;
    category: Joi.StringSchema;
    channel: Joi.ArraySchema;
    completionDate: Joi.DateSchema;
    description: Joi.StringSchema;
    expectedCompletionDate: Joi.DateSchema;
    externalId: Joi.StringSchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    note: Joi.ArraySchema;
    notificationContact: Joi.StringSchema;
    orderDate: Joi.DateSchema;
    orderTotalPrice: Joi.ArraySchema;
    payment: Joi.ArraySchema;
    priority: Joi.StringSchema;
    productOfferingQualification: Joi.ArraySchema;
    productOrderItem: Joi.ArraySchema;
    quote: Joi.ArraySchema;
    relatedParty: Joi.ArraySchema;
    requestedCompletionDate: Joi.DateSchema;
    requestedStartDate: Joi.DateSchema;
    state: Joi.StringSchema;
};
