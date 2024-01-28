"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationRelationshipModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.FeatureSpecificationRelationshipModel = {
    featureId: String,
    name: String,
    parentSpecificationHref: String,
    parentSpecificationId: String,
    relationshipType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=FeatureSpecificationRelationship.model.js.map