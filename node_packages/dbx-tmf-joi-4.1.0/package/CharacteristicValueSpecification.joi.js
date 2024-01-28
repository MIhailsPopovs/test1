"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicValueSpecificationJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.CharacteristicValueSpecificationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CharacteristicValueSpecification'),
    isDefault: Joi.boolean(),
    rangeInterval: Joi.string(),
    regex: Joi.string(),
    unitOfMeasure: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    value: Joi.any(),
    valueFrom: Joi.number(),
    valueTo: Joi.number(),
    valueType: Joi.string(),
};
//# sourceMappingURL=CharacteristicValueSpecification.joi.js.map