"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceStateChangeEventJoi = void 0;
const Joi = require("joi");
const PhysicalResourceStateChangeEventPayload_joi_1 = require("./PhysicalResourceStateChangeEventPayload.joi");
exports.PhysicalResourceStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PhysicalResourceStateChangeEventPayload_joi_1.PhysicalResourceStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PhysicalResourceStateChangeEvent.joi.js.map