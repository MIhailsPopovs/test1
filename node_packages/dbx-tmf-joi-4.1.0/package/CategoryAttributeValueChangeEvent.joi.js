"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const CategoryAttributeValueChangeEventPayload_joi_1 = require("./CategoryAttributeValueChangeEventPayload.joi");
exports.CategoryAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CategoryAttributeValueChangeEventPayload_joi_1.CategoryAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CategoryAttributeValueChangeEvent.joi.js.map