"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderJoi = void 0;
const Joi = require("joi");
const ServiceOrderErrorMessage_joi_1 = require("./ServiceOrderErrorMessage.joi");
const ExternalReference_joi_1 = require("./ExternalReference.joi");
const ServiceOrderJeopardyAlert_joi_1 = require("./ServiceOrderJeopardyAlert.joi");
const ServiceOrderMilestone_joi_1 = require("./ServiceOrderMilestone.joi");
const Note_joi_1 = require("./Note.joi");
const ServiceOrderRelationship_joi_1 = require("./ServiceOrderRelationship.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const ServiceOrderItem_joi_1 = require("./ServiceOrderItem.joi");
exports.ServiceOrderJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrder'),
    cancellationDate: Joi.date(),
    cancellationReason: Joi.string(),
    category: Joi.string(),
    completionDate: Joi.date(),
    description: Joi.string(),
    errorMessage: Joi.array().items(Joi.object(ServiceOrderErrorMessage_joi_1.ServiceOrderErrorMessageJoi)),
    expectedCompletionDate: Joi.date(),
    externalId: Joi.string(),
    externalReference: Joi.array().items(Joi.object(ExternalReference_joi_1.ExternalReferenceJoi)),
    href: Joi.string().uri(),
    id: Joi.string(),
    jeopardyAlert: Joi.array().items(Joi.object(ServiceOrderJeopardyAlert_joi_1.ServiceOrderJeopardyAlertJoi)),
    milestone: Joi.array().items(Joi.object(ServiceOrderMilestone_joi_1.ServiceOrderMilestoneJoi)),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    notificationContact: Joi.string(),
    orderDate: Joi.date(),
    orderRelationship: Joi.array().items(Joi.object(ServiceOrderRelationship_joi_1.ServiceOrderRelationshipJoi)),
    priority: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    requestedCompletionDate: Joi.date(),
    requestedStartDate: Joi.date(),
    serviceOrderItem: Joi.array().items(Joi.object(ServiceOrderItem_joi_1.ServiceOrderItemJoi)),
    startDate: Joi.date(),
    state: Joi.string().valid('acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial', 'assessingCancellation', 'pendingCancellation'),
};
//# sourceMappingURL=ServiceOrder.joi.js.map