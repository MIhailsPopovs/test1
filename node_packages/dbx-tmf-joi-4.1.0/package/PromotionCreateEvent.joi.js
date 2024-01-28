"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCreateEventJoi = void 0;
const Joi = require("joi");
const PromotionCreateEventPayload_joi_1 = require("./PromotionCreateEventPayload.joi");
exports.PromotionCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PromotionCreateEventPayload_joi_1.PromotionCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PromotionCreateEvent.joi.js.map