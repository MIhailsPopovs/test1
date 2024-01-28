"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDeleteEventJoi = void 0;
const Joi = require("joi");
const CustomerDeleteEventPayload_joi_1 = require("./CustomerDeleteEventPayload.joi");
exports.CustomerDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CustomerDeleteEventPayload_joi_1.CustomerDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CustomerDeleteEvent.joi.js.map