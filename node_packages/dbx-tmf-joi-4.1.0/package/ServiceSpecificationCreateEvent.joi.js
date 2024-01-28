"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationCreateEventJoi = void 0;
const Joi = require("joi");
const ServiceSpecificationCreateEventPayload_joi_1 = require("./ServiceSpecificationCreateEventPayload.joi");
exports.ServiceSpecificationCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceSpecificationCreateEventPayload_joi_1.ServiceSpecificationCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceSpecificationCreateEvent.joi.js.map