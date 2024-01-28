"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossedThresholdInformationJoi = void 0;
const Joi = require("joi");
const ThresholdRef_joi_1 = require("./ThresholdRef.joi");
exports.CrossedThresholdInformationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CrossedThresholdInformation'),
    direction: Joi.string(),
    granularity: Joi.string(),
    indicatorName: Joi.string(),
    indicatorUnit: Joi.string(),
    observedValue: Joi.string(),
    threshold: Joi.object(ThresholdRef_joi_1.ThresholdRefJoi),
    thresholdCrossingDescription: Joi.string(),
};
//# sourceMappingURL=CrossedThresholdInformation.joi.js.map