"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationChangeEventJoi = void 0;
const Joi = require("joi");
const ServiceSpecificationChangeEventPayload_joi_1 = require("./ServiceSpecificationChangeEventPayload.joi");
exports.ServiceSpecificationChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceSpecificationChangeEventPayload_joi_1.ServiceSpecificationChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceSpecificationChangeEvent.joi.js.map