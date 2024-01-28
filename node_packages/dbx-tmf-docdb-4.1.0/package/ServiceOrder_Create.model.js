"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrder_CreateModel = void 0;
const ExternalReference_model_1 = require("./ExternalReference.model");
const Note_model_1 = require("./Note.model");
const ServiceOrderRelationship_model_1 = require("./ServiceOrderRelationship.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const ServiceOrderItem_model_1 = require("./ServiceOrderItem.model");
exports.ServiceOrder_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    cancellationDate: Date,
    cancellationReason: String,
    category: String,
    description: String,
    externalId: String,
    externalReference: { '#type': [ExternalReference_model_1.ExternalReferenceModel], default: undefined },
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    notificationContact: String,
    orderRelationship: {
        '#type': [ServiceOrderRelationship_model_1.ServiceOrderRelationshipModel],
        default: undefined,
    },
    priority: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    requestedCompletionDate: Date,
    requestedStartDate: Date,
    serviceOrderItem: { '#type': [ServiceOrderItem_model_1.ServiceOrderItemModel], default: undefined },
};
//# sourceMappingURL=ServiceOrder_Create.model.js.map