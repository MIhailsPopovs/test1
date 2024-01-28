"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationModel = void 0;
const ConstraintRef_model_1 = require("./ConstraintRef.model");
const FeatureSpecificationCharacteristic_model_1 = require("./FeatureSpecificationCharacteristic.model");
const FeatureSpecificationRelationship_model_1 = require("./FeatureSpecificationRelationship.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.FeatureSpecificationModel = {
    constraint: { '#type': [ConstraintRef_model_1.ConstraintRefModel], default: undefined },
    featureSpecCharacteristic: {
        '#type': [FeatureSpecificationCharacteristic_model_1.FeatureSpecificationCharacteristicModel],
        default: undefined,
    },
    featureSpecRelationship: {
        '#type': [FeatureSpecificationRelationship_model_1.FeatureSpecificationRelationshipModel],
        default: undefined,
    },
    id: String,
    isBundle: Boolean,
    isEnabled: Boolean,
    name: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=FeatureSpecification.model.js.map