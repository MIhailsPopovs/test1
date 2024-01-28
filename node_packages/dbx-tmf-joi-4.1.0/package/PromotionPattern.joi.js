"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionPatternJoi = void 0;
const Joi = require("joi");
const PromotionAction_joi_1 = require("./PromotionAction.joi");
const PromotionCriteriaGroup_joi_1 = require("./PromotionCriteriaGroup.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.PromotionPatternJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('PromotionPattern'),
    action: Joi.array().items(Joi.object(PromotionAction_joi_1.PromotionActionJoi)).required(),
    criteriaGroup: Joi.array()
        .items(Joi.object(PromotionCriteriaGroup_joi_1.PromotionCriteriaGroupJoi))
        .required(),
    criteriaGroupLogicalRelationship: Joi.string(),
    description: Joi.string(),
    id: Joi.string(),
    name: Joi.string(),
    priority: Joi.number(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=PromotionPattern.joi.js.map