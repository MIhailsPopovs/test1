"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionPatternModel = void 0;
const PromotionAction_model_1 = require("./PromotionAction.model");
const PromotionCriteriaGroup_model_1 = require("./PromotionCriteriaGroup.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.PromotionPatternModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    action: { '#type': [PromotionAction_model_1.PromotionActionModel], default: undefined },
    criteriaGroup: { '#type': [PromotionCriteriaGroup_model_1.PromotionCriteriaGroupModel], default: undefined },
    criteriaGroupLogicalRelationship: String,
    description: String,
    id: String,
    name: String,
    priority: Number,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=PromotionPattern.model.js.map