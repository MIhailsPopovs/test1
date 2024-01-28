"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationCharacteristicModel = void 0;
const ProductSpecificationCharacteristicRelationship_model_1 = require("./ProductSpecificationCharacteristicRelationship.model");
const CharacteristicValueSpecification_model_1 = require("./CharacteristicValueSpecification.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductSpecificationCharacteristicModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    '@valueSchemaLocation': String,
    configurable: Boolean,
    description: String,
    extensible: Boolean,
    id: String,
    isUnique: Boolean,
    maxCardinality: Number,
    minCardinality: Number,
    name: String,
    productSpecCharRelationship: {
        '#type': [ProductSpecificationCharacteristicRelationship_model_1.ProductSpecificationCharacteristicRelationshipModel],
        default: undefined,
    },
    productSpecCharacteristicValue: {
        '#type': [CharacteristicValueSpecification_model_1.CharacteristicValueSpecificationModel],
        default: undefined,
    },
    regex: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    valueType: String,
};
//# sourceMappingURL=ProductSpecificationCharacteristic.model.js.map