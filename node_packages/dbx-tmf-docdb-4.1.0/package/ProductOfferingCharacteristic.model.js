"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingCharacteristicModel = void 0;
const CharacteristicValueSpecification_model_1 = require("./CharacteristicValueSpecification.model");
const ProductSpecificationCharacteristicRelationship_model_1 = require("./ProductSpecificationCharacteristicRelationship.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductOfferingCharacteristicModel = {
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
    productOfferingCharacteristicValue: {
        '#type': [CharacteristicValueSpecification_model_1.CharacteristicValueSpecificationModel],
        default: undefined,
    },
    productSpecCharRelationship: {
        '#type': [ProductSpecificationCharacteristicRelationship_model_1.ProductSpecificationCharacteristicRelationshipModel],
        default: undefined,
    },
    regex: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    valueType: String,
};
//# sourceMappingURL=ProductOfferingCharacteristic.model.js.map