"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationCharacteristicModel = void 0;
const FeatureSpecificationCharacteristicRelationship_model_1 = require("./FeatureSpecificationCharacteristicRelationship.model");
const CharacteristicValueSpecification_model_1 = require("./CharacteristicValueSpecification.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.FeatureSpecificationCharacteristicModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    '@valueSchemaLocation': String,
    configurable: Boolean,
    description: String,
    extensible: Boolean,
    featureSpecCharRelationship: {
        '#type': [FeatureSpecificationCharacteristicRelationship_model_1.FeatureSpecificationCharacteristicRelationshipModel],
        default: undefined,
    },
    featureSpecCharacteristicValue: {
        '#type': [CharacteristicValueSpecification_model_1.CharacteristicValueSpecificationModel],
        default: undefined,
    },
    id: String,
    isUnique: Boolean,
    maxCardinality: Number,
    minCardinality: Number,
    name: String,
    regex: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    valueType: String,
};
//# sourceMappingURL=FeatureSpecificationCharacteristic.model.js.map