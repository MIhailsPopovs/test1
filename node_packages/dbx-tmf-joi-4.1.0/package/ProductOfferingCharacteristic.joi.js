"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingCharacteristicJoi = void 0;
const Joi = require("joi");
const CharacteristicValueSpecification_joi_1 = require("./CharacteristicValueSpecification.joi");
const ProductSpecificationCharacteristicRelationship_joi_1 = require("./ProductSpecificationCharacteristicRelationship.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOfferingCharacteristicJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingCharacteristic'),
    '@valueSchemaLocation': Joi.string(),
    configurable: Joi.boolean(),
    description: Joi.string(),
    extensible: Joi.boolean(),
    id: Joi.string(),
    isUnique: Joi.boolean(),
    maxCardinality: Joi.number(),
    minCardinality: Joi.number(),
    name: Joi.string(),
    productOfferingCharacteristicValue: Joi.array().items(Joi.object(CharacteristicValueSpecification_joi_1.CharacteristicValueSpecificationJoi)),
    productSpecCharRelationship: Joi.array().items(Joi.object(ProductSpecificationCharacteristicRelationship_joi_1.ProductSpecificationCharacteristicRelationshipJoi)),
    regex: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    valueType: Joi.string(),
};
//# sourceMappingURL=ProductOfferingCharacteristic.joi.js.map