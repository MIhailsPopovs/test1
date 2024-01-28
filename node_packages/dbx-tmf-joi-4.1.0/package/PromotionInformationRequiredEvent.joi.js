"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionInformationRequiredEventJoi = void 0;
const Joi = require("joi");
const PromotionInformationRequiredEventPayload_joi_1 = require("./PromotionInformationRequiredEventPayload.joi");
exports.PromotionInformationRequiredEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PromotionInformationRequiredEventPayload_joi_1.PromotionInformationRequiredEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PromotionInformationRequiredEvent.joi.js.map