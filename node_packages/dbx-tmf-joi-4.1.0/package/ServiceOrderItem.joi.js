"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemJoi = void 0;
const Joi = require("joi");
const AppointmentRef_joi_1 = require("./AppointmentRef.joi");
const ServiceOrderItemErrorMessage_joi_1 = require("./ServiceOrderItemErrorMessage.joi");
const ServiceRefOrValue_joi_1 = require("./ServiceRefOrValue.joi");
const ServiceOrderItemRelationship_joi_1 = require("./ServiceOrderItemRelationship.joi");
exports.ServiceOrderItemJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderItem'),
    action: Joi.string().valid('add', 'modify', 'delete', 'noChange').required(),
    appointment: Joi.object(AppointmentRef_joi_1.AppointmentRefJoi),
    errorMessage: Joi.array().items(Joi.object(ServiceOrderItemErrorMessage_joi_1.ServiceOrderItemErrorMessageJoi)),
    id: Joi.string().required(),
    quantity: Joi.number(),
    service: Joi.object(ServiceRefOrValue_joi_1.ServiceRefOrValueJoi).required(),
    serviceOrderItem: Joi.array().items(Joi.object()),
    serviceOrderItemRelationship: Joi.array().items(Joi.object(ServiceOrderItemRelationship_joi_1.ServiceOrderItemRelationshipJoi)),
    state: Joi.string().valid('acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'assessingCancellation', 'pendingCancellation', 'partial'),
};
exports.ServiceOrderItemJoi.serviceOrderItem = Joi.array().items(Joi.object(exports.ServiceOrderItemJoi));
//# sourceMappingURL=ServiceOrderItem.joi.js.map