"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceCreateEventJoi = void 0;
const Joi = require("joi");
const PhysicalResourceCreateEventPayload_joi_1 = require("./PhysicalResourceCreateEventPayload.joi");
exports.PhysicalResourceCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PhysicalResourceCreateEventPayload_joi_1.PhysicalResourceCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PhysicalResourceCreateEvent.joi.js.map