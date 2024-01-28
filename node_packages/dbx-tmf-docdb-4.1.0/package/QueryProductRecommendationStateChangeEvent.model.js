"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductRecommendationStateChangeEventModel = void 0;
const QueryProductRecommendationStateChangeEventPayload_model_1 = require("./QueryProductRecommendationStateChangeEventPayload.model");
exports.QueryProductRecommendationStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: QueryProductRecommendationStateChangeEventPayload_model_1.QueryProductRecommendationStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=QueryProductRecommendationStateChangeEvent.model.js.map