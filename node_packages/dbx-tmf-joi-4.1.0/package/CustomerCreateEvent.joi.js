"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateEventJoi = void 0;
const Joi = require("joi");
const CustomerCreateEventPayload_joi_1 = require("./CustomerCreateEventPayload.joi");
exports.CustomerCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CustomerCreateEventPayload_joi_1.CustomerCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CustomerCreateEvent.joi.js.map