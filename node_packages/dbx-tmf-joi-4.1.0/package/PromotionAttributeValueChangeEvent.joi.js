"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const PromotionAttributeValueChangeEventPayload_joi_1 = require("./PromotionAttributeValueChangeEventPayload.joi");
exports.PromotionAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PromotionAttributeValueChangeEventPayload_joi_1.PromotionAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PromotionAttributeValueChangeEvent.joi.js.map