"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductRecommendationCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const QueryProductRecommendation_joi_1 = require("./QueryProductRecommendation.joi");
exports.QueryProductRecommendationCreateEventPayloadJoi = {
    queryProductRecommendation: Joi.object(QueryProductRecommendation_joi_1.QueryProductRecommendationJoi),
};
//# sourceMappingURL=QueryProductRecommendationCreateEventPayload.joi.js.map