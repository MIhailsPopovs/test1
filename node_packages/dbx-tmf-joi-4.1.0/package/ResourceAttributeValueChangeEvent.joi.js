"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const ResourceAttributeValueChangeEventPayload_joi_1 = require("./ResourceAttributeValueChangeEventPayload.joi");
exports.ResourceAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ResourceAttributeValueChangeEventPayload_joi_1.ResourceAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ResourceAttributeValueChangeEvent.joi.js.map