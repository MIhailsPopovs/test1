"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderCreateEventJoi = void 0;
const Joi = require("joi");
const ServiceOrderCreateEventPayload_joi_1 = require("./ServiceOrderCreateEventPayload.joi");
exports.ServiceOrderCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceOrderCreateEventPayload_joi_1.ServiceOrderCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceOrderCreateEvent.joi.js.map