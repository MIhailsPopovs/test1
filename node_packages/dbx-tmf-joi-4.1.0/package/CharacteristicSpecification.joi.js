"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicSpecificationJoi = void 0;
const Joi = require("joi");
const CharacteristicSpecificationRelationship_joi_1 = require("./CharacteristicSpecificationRelationship.joi");
const CharacteristicValueSpecification_joi_1 = require("./CharacteristicValueSpecification.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.CharacteristicSpecificationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CharacteristicSpecification'),
    '@valueSchemaLocation': Joi.string(),
    charSpecRelationship: Joi.array().items(Joi.object(CharacteristicSpecificationRelationship_joi_1.CharacteristicSpecificationRelationshipJoi)),
    characteristicValueSpecification: Joi.array().items(Joi.object(CharacteristicValueSpecification_joi_1.CharacteristicValueSpecificationJoi)),
    configurable: Joi.boolean(),
    description: Joi.string(),
    extensible: Joi.boolean(),
    id: Joi.string(),
    isUnique: Joi.boolean(),
    maxCardinality: Joi.number(),
    minCardinality: Joi.number(),
    name: Joi.string(),
    regex: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    valueType: Joi.string(),
};
//# sourceMappingURL=CharacteristicSpecification.joi.js.map