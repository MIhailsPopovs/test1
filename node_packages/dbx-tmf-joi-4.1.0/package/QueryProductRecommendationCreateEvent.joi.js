"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductRecommendationCreateEventJoi = void 0;
const Joi = require("joi");
const QueryProductRecommendationCreateEventPayload_joi_1 = require("./QueryProductRecommendationCreateEventPayload.joi");
exports.QueryProductRecommendationCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(QueryProductRecommendationCreateEventPayload_joi_1.QueryProductRecommendationCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=QueryProductRecommendationCreateEvent.joi.js.map