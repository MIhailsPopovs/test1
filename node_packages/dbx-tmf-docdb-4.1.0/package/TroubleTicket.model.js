"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketModel = void 0;
const AttachmentRefOrValue_model_1 = require("./AttachmentRefOrValue.model");
const ChannelRef_model_1 = require("./ChannelRef.model");
const Note_model_1 = require("./Note.model");
const RelatedEntity_model_1 = require("./RelatedEntity.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const StatusChange_model_1 = require("./StatusChange.model");
const TroubleTicketRelationship_model_1 = require("./TroubleTicketRelationship.model");
exports.TroubleTicketModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    attachment: { '#type': [AttachmentRefOrValue_model_1.AttachmentRefOrValueModel], default: undefined },
    channel: ChannelRef_model_1.ChannelRefModel,
    creationDate: Date,
    description: String,
    expectedResolutionDate: Date,
    externalId: String,
    href: String,
    id: String,
    lastUpdate: Date,
    name: String,
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    priority: String,
    relatedEntity: { '#type': [RelatedEntity_model_1.RelatedEntityModel], default: undefined },
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    requestedResolutionDate: Date,
    resolutionDate: Date,
    severity: String,
    status: String,
    statusChange: { '#type': [StatusChange_model_1.StatusChangeModel], default: undefined },
    statusChangeDate: Date,
    statusChangeReason: String,
    ticketType: String,
    troubleTicketRelationship: {
        '#type': [TroubleTicketRelationship_model_1.TroubleTicketRelationshipModel],
        default: undefined,
    },
};
//# sourceMappingURL=TroubleTicket.model.js.map