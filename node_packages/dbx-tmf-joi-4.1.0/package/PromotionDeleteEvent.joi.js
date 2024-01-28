"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionDeleteEventJoi = void 0;
const Joi = require("joi");
const PromotionDeleteEventPayload_joi_1 = require("./PromotionDeleteEventPayload.joi");
exports.PromotionDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(PromotionDeleteEventPayload_joi_1.PromotionDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=PromotionDeleteEvent.joi.js.map