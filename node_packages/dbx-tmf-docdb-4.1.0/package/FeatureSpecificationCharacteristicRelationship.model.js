"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationCharacteristicRelationshipModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.FeatureSpecificationCharacteristicRelationshipModel = {
    characteristicId: String,
    featureId: String,
    name: String,
    relationshipType: String,
    resourceSpecificationHref: String,
    resourceSpecificationId: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=FeatureSpecificationCharacteristicRelationship.model.js.map