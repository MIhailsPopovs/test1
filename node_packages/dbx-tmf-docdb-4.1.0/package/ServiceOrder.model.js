"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderModel = void 0;
const ServiceOrderErrorMessage_model_1 = require("./ServiceOrderErrorMessage.model");
const ExternalReference_model_1 = require("./ExternalReference.model");
const ServiceOrderJeopardyAlert_model_1 = require("./ServiceOrderJeopardyAlert.model");
const ServiceOrderMilestone_model_1 = require("./ServiceOrderMilestone.model");
const Note_model_1 = require("./Note.model");
const ServiceOrderRelationship_model_1 = require("./ServiceOrderRelationship.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const ServiceOrderItem_model_1 = require("./ServiceOrderItem.model");
exports.ServiceOrderModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    cancellationDate: Date,
    cancellationReason: String,
    category: String,
    completionDate: Date,
    description: String,
    errorMessage: {
        '#type': [ServiceOrderErrorMessage_model_1.ServiceOrderErrorMessageModel],
        default: undefined,
    },
    expectedCompletionDate: Date,
    externalId: String,
    externalReference: { '#type': [ExternalReference_model_1.ExternalReferenceModel], default: undefined },
    href: String,
    id: String,
    jeopardyAlert: {
        '#type': [ServiceOrderJeopardyAlert_model_1.ServiceOrderJeopardyAlertModel],
        default: undefined,
    },
    milestone: { '#type': [ServiceOrderMilestone_model_1.ServiceOrderMilestoneModel], default: undefined },
    note: { '#type': [Note_model_1.NoteModel], default: undefined },
    notificationContact: String,
    orderDate: Date,
    orderRelationship: {
        '#type': [ServiceOrderRelationship_model_1.ServiceOrderRelationshipModel],
        default: undefined,
    },
    priority: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    requestedCompletionDate: Date,
    requestedStartDate: Date,
    serviceOrderItem: { '#type': [ServiceOrderItem_model_1.ServiceOrderItemModel], default: undefined },
    startDate: Date,
    state: String,
};
//# sourceMappingURL=ServiceOrder.model.js.map