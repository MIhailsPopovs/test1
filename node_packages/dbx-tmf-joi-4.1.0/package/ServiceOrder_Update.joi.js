"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrder_UpdateJoi = void 0;
const Joi = require("joi");
const ExternalReference_joi_1 = require("./ExternalReference.joi");
const Note_joi_1 = require("./Note.joi");
const ServiceOrderRelationship_joi_1 = require("./ServiceOrderRelationship.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const ServiceOrderItem_joi_1 = require("./ServiceOrderItem.joi");
exports.ServiceOrder_UpdateJoi = {
    description: Joi.string(),
    expectedCompletionDate: Joi.date(),
    externalId: Joi.string(),
    externalReference: Joi.array().items(Joi.object(ExternalReference_joi_1.ExternalReferenceJoi)),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    notificationContact: Joi.string(),
    orderRelationship: Joi.array().items(Joi.object(ServiceOrderRelationship_joi_1.ServiceOrderRelationshipJoi)),
    priority: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    requestedCompletionDate: Joi.date(),
    requestedStartDate: Joi.date(),
    serviceOrderItem: Joi.array().items(Joi.object(ServiceOrderItem_joi_1.ServiceOrderItemJoi)),
    state: Joi.string().valid('acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial', 'assessingCancellation', 'pendingCancellation'),
};
//# sourceMappingURL=ServiceOrder_Update.joi.js.map