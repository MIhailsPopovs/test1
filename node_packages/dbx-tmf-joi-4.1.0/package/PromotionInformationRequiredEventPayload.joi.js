"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionInformationRequiredEventPayloadJoi = void 0;
const Joi = require("joi");
const Promotion_joi_1 = require("./Promotion.joi");
exports.PromotionInformationRequiredEventPayloadJoi = {
    promotion: Joi.object(Promotion_joi_1.PromotionJoi),
};
//# sourceMappingURL=PromotionInformationRequiredEventPayload.joi.js.map