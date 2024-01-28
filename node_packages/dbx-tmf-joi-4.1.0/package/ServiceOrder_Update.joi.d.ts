import * as Joi from 'joi';
export declare const ServiceOrder_UpdateJoi: {
    description: Joi.StringSchema;
    expectedCompletionDate: Joi.DateSchema;
    externalId: Joi.StringSchema;
    externalReference: Joi.ArraySchema;
    note: Joi.ArraySchema;
    notificationContact: Joi.StringSchema;
    orderRelationship: Joi.ArraySchema;
    priority: Joi.StringSchema;
    relatedParty: Joi.ArraySchema;
    requestedCompletionDate: Joi.DateSchema;
    requestedStartDate: Joi.DateSchema;
    serviceOrderItem: Joi.ArraySchema;
    state: Joi.StringSchema;
};
