"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const PhysicalResourceAttributeValueChangeEventPayload_joi_1 = require("./PhysicalResourceAttributeValueChangeEventPayload.joi");
exports.PhysicalResourceAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PhysicalResourceAttributeValueChangeEventPayload_joi_1.PhysicalResourceAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PhysicalResourceAttributeValueChangeEvent.joi.js.map