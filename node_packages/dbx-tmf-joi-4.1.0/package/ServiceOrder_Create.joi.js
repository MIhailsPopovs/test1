"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrder_CreateJoi = void 0;
const Joi = require("joi");
const ExternalReference_joi_1 = require("./ExternalReference.joi");
const Note_joi_1 = require("./Note.joi");
const ServiceOrderRelationship_joi_1 = require("./ServiceOrderRelationship.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const ServiceOrderItem_joi_1 = require("./ServiceOrderItem.joi");
exports.ServiceOrder_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrder'),
    cancellationDate: Joi.date(),
    cancellationReason: Joi.string(),
    category: Joi.string(),
    description: Joi.string(),
    externalId: Joi.string(),
    externalReference: Joi.array().items(Joi.object(ExternalReference_joi_1.ExternalReferenceJoi)),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    notificationContact: Joi.string(),
    orderRelationship: Joi.array().items(Joi.object(ServiceOrderRelationship_joi_1.ServiceOrderRelationshipJoi)),
    priority: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    requestedCompletionDate: Joi.date(),
    requestedStartDate: Joi.date(),
    serviceOrderItem: Joi.array()
        .items(Joi.object(ServiceOrderItem_joi_1.ServiceOrderItemJoi))
        .required(),
};
//# sourceMappingURL=ServiceOrder_Create.joi.js.map