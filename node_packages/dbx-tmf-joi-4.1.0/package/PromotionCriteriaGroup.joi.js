"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCriteriaGroupJoi = void 0;
const Joi = require("joi");
const PromotionCriteria_joi_1 = require("./PromotionCriteria.joi");
exports.PromotionCriteriaGroupJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('PromotionCriteriaGroup'),
    criteria: Joi.array().items(Joi.object(PromotionCriteria_joi_1.PromotionCriteriaJoi)).required(),
    criteriaLogicalRelationship: Joi.string(),
    groupName: Joi.string(),
    id: Joi.string(),
};
//# sourceMappingURL=PromotionCriteriaGroup.joi.js.map