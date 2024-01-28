"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingLogicAlgorithmJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.PricingLogicAlgorithmJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('PricingLogicAlgorithm'),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    plaSpecId: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=PricingLogicAlgorithm.joi.js.map