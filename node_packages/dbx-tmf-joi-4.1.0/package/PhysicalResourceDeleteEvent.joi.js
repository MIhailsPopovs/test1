"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceDeleteEventJoi = void 0;
const Joi = require("joi");
const PhysicalResourceDeleteEventPayload_joi_1 = require("./PhysicalResourceDeleteEventPayload.joi");
exports.PhysicalResourceDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PhysicalResourceDeleteEventPayload_joi_1.PhysicalResourceDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PhysicalResourceDeleteEvent.joi.js.map