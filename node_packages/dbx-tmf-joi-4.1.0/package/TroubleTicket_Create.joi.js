"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicket_CreateJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const ChannelRef_joi_1 = require("./ChannelRef.joi");
const tools_1 = require("./tools");
const Note_joi_1 = require("./Note.joi");
const RelatedEntity_joi_1 = require("./RelatedEntity.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const StatusChange_joi_1 = require("./StatusChange.joi");
const TroubleTicketRelationship_joi_1 = require("./TroubleTicketRelationship.joi");
exports.TroubleTicket_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('TroubleTicket'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    channel: Joi.object(ChannelRef_joi_1.ChannelRefJoi),
    creationDate: Joi.date(),
    description: Joi.string().required(),
    expectedResolutionDate: Joi.date(),
    externalId: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    name: Joi.string(),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    priority: Joi.string(),
    relatedEntity: Joi.array().items(Joi.object(RelatedEntity_joi_1.RelatedEntityJoi)),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    requestedResolutionDate: Joi.date(),
    resolutionDate: Joi.date(),
    severity: Joi.string().required(),
    status: Joi.string().valid('acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'closed', 'resolved'),
    statusChange: Joi.array().items(Joi.object(StatusChange_joi_1.StatusChangeJoi)),
    statusChangeDate: Joi.date(),
    statusChangeReason: Joi.string(),
    ticketType: Joi.string().required(),
    troubleTicketRelationship: Joi.array().items(Joi.object(TroubleTicketRelationship_joi_1.TroubleTicketRelationshipJoi)),
};
//# sourceMappingURL=TroubleTicket_Create.joi.js.map