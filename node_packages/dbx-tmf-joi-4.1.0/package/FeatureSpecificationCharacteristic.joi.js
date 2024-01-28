"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationCharacteristicJoi = void 0;
const Joi = require("joi");
const FeatureSpecificationCharacteristicRelationship_joi_1 = require("./FeatureSpecificationCharacteristicRelationship.joi");
const CharacteristicValueSpecification_joi_1 = require("./CharacteristicValueSpecification.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.FeatureSpecificationCharacteristicJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('FeatureSpecificationCharacteristic'),
    '@valueSchemaLocation': Joi.string(),
    configurable: Joi.boolean(),
    description: Joi.string(),
    extensible: Joi.boolean(),
    featureSpecCharRelationship: Joi.array().items(Joi.object(FeatureSpecificationCharacteristicRelationship_joi_1.FeatureSpecificationCharacteristicRelationshipJoi)),
    featureSpecCharacteristicValue: Joi.array().items(Joi.object(CharacteristicValueSpecification_joi_1.CharacteristicValueSpecificationJoi)),
    id: Joi.string(),
    isUnique: Joi.boolean(),
    maxCardinality: Joi.number(),
    minCardinality: Joi.number(),
    name: Joi.string().required(),
    regex: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    valueType: Joi.string(),
};
//# sourceMappingURL=FeatureSpecificationCharacteristic.joi.js.map