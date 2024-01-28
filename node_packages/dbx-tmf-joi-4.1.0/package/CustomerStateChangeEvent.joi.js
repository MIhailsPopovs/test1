"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerStateChangeEventJoi = void 0;
const Joi = require("joi");
const CustomerStateChangeEventPayload_joi_1 = require("./CustomerStateChangeEventPayload.joi");
exports.CustomerStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CustomerStateChangeEventPayload_joi_1.CustomerStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CustomerStateChangeEvent.joi.js.map