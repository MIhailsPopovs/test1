"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceStateChangeEventJoi = void 0;
const Joi = require("joi");
const ResourceStateChangeEventPayload_joi_1 = require("./ResourceStateChangeEventPayload.joi");
exports.ResourceStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ResourceStateChangeEventPayload_joi_1.ResourceStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ResourceStateChangeEvent.joi.js.map