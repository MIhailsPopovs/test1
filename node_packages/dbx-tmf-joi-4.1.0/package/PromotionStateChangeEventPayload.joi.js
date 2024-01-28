"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Promotion_joi_1 = require("./Promotion.joi");
exports.PromotionStateChangeEventPayloadJoi = {
    promotion: Joi.object(Promotion_joi_1.PromotionJoi),
};
//# sourceMappingURL=PromotionStateChangeEventPayload.joi.js.map