"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCriteriaJoi = void 0;
const Joi = require("joi");
exports.PromotionCriteriaJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('PromotionCriteria'),
    criteriaOperator: Joi.string().required(),
    criteriaParameter: Joi.string().required(),
    criteriaValue: Joi.string().required(),
    id: Joi.string(),
};
//# sourceMappingURL=PromotionCriteria.joi.js.map