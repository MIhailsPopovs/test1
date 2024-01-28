"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const Promotion_joi_1 = require("./Promotion.joi");
exports.PromotionDeleteEventPayloadJoi = {
    promotion: Joi.object(Promotion_joi_1.PromotionJoi),
};
//# sourceMappingURL=PromotionDeleteEventPayload.joi.js.map