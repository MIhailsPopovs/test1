"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicket_UpdateJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const ChannelRef_joi_1 = require("./ChannelRef.joi");
const Note_joi_1 = require("./Note.joi");
const RelatedEntity_joi_1 = require("./RelatedEntity.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const TroubleTicketRelationship_joi_1 = require("./TroubleTicketRelationship.joi");
exports.TroubleTicket_UpdateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('TroubleTicket'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    channel: Joi.object(ChannelRef_joi_1.ChannelRefJoi),
    description: Joi.string(),
    expectedResolutionDate: Joi.date(),
    externalId: Joi.string(),
    name: Joi.string(),
    note: Joi.array().items(Joi.object(Note_joi_1.NoteJoi)),
    priority: Joi.string(),
    relatedEntity: Joi.array().items(Joi.object(RelatedEntity_joi_1.RelatedEntityJoi)),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    requestedResolutionDate: Joi.date(),
    resolutionDate: Joi.date(),
    severity: Joi.string(),
    status: Joi.string().valid('acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'closed', 'resolved'),
    statusChangeReason: Joi.string(),
    ticketType: Joi.string(),
    troubleTicketRelationship: Joi.array().items(Joi.object(TroubleTicketRelationship_joi_1.TroubleTicketRelationshipJoi)),
};
//# sourceMappingURL=TroubleTicket_Update.joi.js.map