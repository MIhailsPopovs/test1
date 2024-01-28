"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderStateChangeEventJoi = void 0;
const Joi = require("joi");
const ServiceOrderStateChangeEventPayload_joi_1 = require("./ServiceOrderStateChangeEventPayload.joi");
exports.ServiceOrderStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceOrderStateChangeEventPayload_joi_1.ServiceOrderStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceOrderStateChangeEvent.joi.js.map