"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductRecommendationStateChangeEventJoi = void 0;
const Joi = require("joi");
const QueryProductRecommendationStateChangeEventPayload_joi_1 = require("./QueryProductRecommendationStateChangeEventPayload.joi");
exports.QueryProductRecommendationStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(QueryProductRecommendationStateChangeEventPayload_joi_1.QueryProductRecommendationStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=QueryProductRecommendationStateChangeEvent.joi.js.map