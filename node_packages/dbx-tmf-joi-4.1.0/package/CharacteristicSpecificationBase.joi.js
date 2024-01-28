"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicSpecificationBaseJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.CharacteristicSpecificationBaseJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CharacteristicSpecificationBase'),
    '@valueSchemaLocation': Joi.string(),
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
//# sourceMappingURL=CharacteristicSpecificationBase.joi.js.map