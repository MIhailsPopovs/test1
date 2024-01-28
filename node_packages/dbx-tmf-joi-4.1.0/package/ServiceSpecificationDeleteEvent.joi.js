"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationDeleteEventJoi = void 0;
const Joi = require("joi");
const ServiceSpecificationDeleteEventPayload_joi_1 = require("./ServiceSpecificationDeleteEventPayload.joi");
exports.ServiceSpecificationDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceSpecificationDeleteEventPayload_joi_1.ServiceSpecificationDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceSpecificationDeleteEvent.joi.js.map