"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCriteriaGroupModel = void 0;
const PromotionCriteria_model_1 = require("./PromotionCriteria.model");
exports.PromotionCriteriaGroupModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    criteria: { '#type': [PromotionCriteria_model_1.PromotionCriteriaModel], default: undefined },
    criteriaLogicalRelationship: String,
    groupName: String,
    id: String,
};
//# sourceMappingURL=PromotionCriteriaGroup.model.js.map