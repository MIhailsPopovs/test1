"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceDeleteEventJoi = void 0;
const Joi = require("joi");
const ResourceDeleteEventPayload_joi_1 = require("./ResourceDeleteEventPayload.joi");
exports.ResourceDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ResourceDeleteEventPayload_joi_1.ResourceDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ResourceDeleteEvent.joi.js.map