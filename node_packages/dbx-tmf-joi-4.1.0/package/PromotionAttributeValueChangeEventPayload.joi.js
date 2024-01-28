"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Promotion_joi_1 = require("./Promotion.joi");
exports.PromotionAttributeValueChangeEventPayloadJoi = {
    promotion: Joi.object(Promotion_joi_1.PromotionJoi),
};
//# sourceMappingURL=PromotionAttributeValueChangeEventPayload.joi.js.map