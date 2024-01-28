"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const CustomerAttributeValueChangeEventPayload_joi_1 = require("./CustomerAttributeValueChangeEventPayload.joi");
exports.CustomerAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CustomerAttributeValueChangeEventPayload_joi_1.CustomerAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CustomerAttributeValueChangeEvent.joi.js.map