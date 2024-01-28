"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicSpecificationModel = void 0;
const CharacteristicSpecificationRelationship_model_1 = require("./CharacteristicSpecificationRelationship.model");
const CharacteristicValueSpecification_model_1 = require("./CharacteristicValueSpecification.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.CharacteristicSpecificationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    '@valueSchemaLocation': String,
    charSpecRelationship: {
        '#type': [CharacteristicSpecificationRelationship_model_1.CharacteristicSpecificationRelationshipModel],
        default: undefined,
    },
    characteristicValueSpecification: {
        '#type': [CharacteristicValueSpecification_model_1.CharacteristicValueSpecificationModel],
        default: undefined,
    },
    configurable: Boolean,
    description: String,
    extensible: Boolean,
    id: String,
    isUnique: Boolean,
    maxCardinality: Number,
    minCardinality: Number,
    name: String,
    regex: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    valueType: String,
};
//# sourceMappingURL=CharacteristicSpecification.model.js.map