"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderDeleteEventJoi = void 0;
const Joi = require("joi");
const ServiceOrderDeleteEventPayload_joi_1 = require("./ServiceOrderDeleteEventPayload.joi");
exports.ServiceOrderDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceOrderDeleteEventPayload_joi_1.ServiceOrderDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceOrderDeleteEvent.joi.js.map