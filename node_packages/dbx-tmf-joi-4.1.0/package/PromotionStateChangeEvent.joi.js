"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionStateChangeEventJoi = void 0;
const Joi = require("joi");
const PromotionStateChangeEventPayload_joi_1 = require("./PromotionStateChangeEventPayload.joi");
exports.PromotionStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PromotionStateChangeEventPayload_joi_1.PromotionStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PromotionStateChangeEvent.joi.js.map