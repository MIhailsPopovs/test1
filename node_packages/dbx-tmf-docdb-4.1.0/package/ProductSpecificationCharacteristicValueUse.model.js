"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationCharacteristicValueUseModel = void 0;
const CharacteristicValueSpecification_model_1 = require("./CharacteristicValueSpecification.model");
const ProductSpecificationRef_model_1 = require("./ProductSpecificationRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductSpecificationCharacteristicValueUseModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    description: String,
    id: String,
    maxCardinality: Number,
    minCardinality: Number,
    name: String,
    productSpecCharacteristicValue: {
        '#type': [CharacteristicValueSpecification_model_1.CharacteristicValueSpecificationModel],
        default: undefined,
    },
    productSpecification: ProductSpecificationRef_model_1.ProductSpecificationRefModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    valueType: String,
};
//# sourceMappingURL=ProductSpecificationCharacteristicValueUse.model.js.map