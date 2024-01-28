"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const Promotion_joi_1 = require("./Promotion.joi");
exports.PromotionCreateEventPayloadJoi = {
    promotion: Joi.object(Promotion_joi_1.PromotionJoi),
};
//# sourceMappingURL=PromotionCreateEventPayload.joi.js.map