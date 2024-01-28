"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderJeopardyEventJoi = void 0;
const Joi = require("joi");
const ServiceOrderJeopardyEventPayload_joi_1 = require("./ServiceOrderJeopardyEventPayload.joi");
exports.ServiceOrderJeopardyEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceOrderJeopardyEventPayload_joi_1.ServiceOrderJeopardyEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceOrderJeopardyEvent.joi.js.map