import * as Joi from 'joi';
export declare const TroubleTicket_CreateJoi: {
    '@baseType': Joi.StringSchema;
    '@schemaLocation': Joi.StringSchema;
    '@type': Joi.StringSchema;
    attachment: Joi.ArraySchema;
    channel: Joi.ObjectSchema<any>;
    creationDate: Joi.DateSchema;
    description: Joi.StringSchema;
    expectedResolutionDate: Joi.DateSchema;
    externalId: Joi.StringSchema;
    lastUpdate: Joi.DateSchema;
    name: Joi.StringSchema;
    note: Joi.ArraySchema;
    priority: Joi.StringSchema;
    relatedEntity: Joi.ArraySchema;
    relatedParty: Joi.ArraySchema;
    requestedResolutionDate: Joi.DateSchema;
    resolutionDate: Joi.DateSchema;
    severity: Joi.StringSchema;
    status: Joi.StringSchema;
    statusChange: Joi.ArraySchema;
    statusChangeDate: Joi.DateSchema;
    statusChangeReason: Joi.StringSchema;
    ticketType: Joi.StringSchema;
    troubleTicketRelationship: Joi.ArraySchema;
};
