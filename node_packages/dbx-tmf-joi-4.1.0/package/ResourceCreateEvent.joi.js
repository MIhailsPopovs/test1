"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCreateEventJoi = void 0;
const Joi = require("joi");
const ResourceCreateEventPayload_joi_1 = require("./ResourceCreateEventPayload.joi");
exports.ResourceCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ResourceCreateEventPayload_joi_1.ResourceCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ResourceCreateEvent.joi.js.map