"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureRelationshipModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.FeatureRelationshipModel = {
    id: String,
    name: String,
    relationshipType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=FeatureRelationship.model.js.map