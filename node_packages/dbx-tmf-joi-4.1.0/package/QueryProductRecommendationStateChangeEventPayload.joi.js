"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductRecommendationStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const QueryProductRecommendation_joi_1 = require("./QueryProductRecommendation.joi");
exports.QueryProductRecommendationStateChangeEventPayloadJoi = {
    queryProductRecommendation: Joi.object(QueryProductRecommendation_joi_1.QueryProductRecommendationJoi),
};
//# sourceMappingURL=QueryProductRecommendationStateChangeEventPayload.joi.js.map