"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingCharacteristicValueUseJoi = void 0;
const Joi = require("joi");
const CharacteristicValueSpecification_joi_1 = require("./CharacteristicValueSpecification.joi");
const ProductSpecificationRef_joi_1 = require("./ProductSpecificationRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOfferingCharacteristicValueUseJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingCharacteristicValueUse'),
    description: Joi.string(),
    id: Joi.string(),
    maxCardinality: Joi.number(),
    minCardinality: Joi.number(),
    name: Joi.string(),
    productOfferingCharacteristicValue: Joi.array().items(Joi.object(CharacteristicValueSpecification_joi_1.CharacteristicValueSpecificationJoi)),
    productSpecification: Joi.object(ProductSpecificationRef_joi_1.ProductSpecificationRefJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    valueType: Joi.string(),
};
//# sourceMappingURL=ProductOfferingCharacteristicValueUse.joi.js.map