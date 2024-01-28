import * as Joi from 'joi';
export declare const ServiceOrderJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    cancellationDate: Joi.DateSchema;
    cancellationReason: Joi.StringSchema;
    category: Joi.StringSchema;
    completionDate: Joi.DateSchema;
    description: Joi.StringSchema;
    errorMessage: Joi.ArraySchema;
    expectedCompletionDate: Joi.DateSchema;
    externalId: Joi.StringSchema;
    externalReference: Joi.ArraySchema;
    href: Joi.StringSchema;
    id: Joi.StringSchema;
    jeopardyAlert: Joi.ArraySchema;
    milestone: Joi.ArraySchema;
    note: Joi.ArraySchema;
    notificationContact: Joi.StringSchema;
    orderDate: Joi.DateSchema;
    orderRelationship: Joi.ArraySchema;
    priority: Joi.StringSchema;
    relatedParty: Joi.ArraySchema;
    requestedCompletionDate: Joi.DateSchema;
    requestedStartDate: Joi.DateSchema;
    serviceOrderItem: Joi.ArraySchema;
    startDate: Joi.DateSchema;
    state: Joi.StringSchema;
};
