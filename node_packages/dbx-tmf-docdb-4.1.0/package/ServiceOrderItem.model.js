"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemModel = void 0;
const AppointmentRef_model_1 = require("./AppointmentRef.model");
const ServiceOrderItemErrorMessage_model_1 = require("./ServiceOrderItemErrorMessage.model");
const ServiceRefOrValue_model_1 = require("./ServiceRefOrValue.model");
const ServiceOrderItemRelationship_model_1 = require("./ServiceOrderItemRelationship.model");
exports.ServiceOrderItemModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    action: String,
    appointment: AppointmentRef_model_1.AppointmentRefModel,
    errorMessage: {
        '#type': [ServiceOrderItemErrorMessage_model_1.ServiceOrderItemErrorMessageModel],
        default: undefined,
    },
    id: String,
    quantity: Number,
    service: ServiceRefOrValue_model_1.ServiceRefOrValueModel,
    serviceOrderItem: { '#type': [Object], default: undefined },
    serviceOrderItemRelationship: {
        '#type': [ServiceOrderItemRelationship_model_1.ServiceOrderItemRelationshipModel],
        default: undefined,
    },
    state: String,
};
//# sourceMappingURL=ServiceOrderItem.model.js.map