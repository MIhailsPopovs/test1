"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicAlgorithmJoi = void 0;
const Joi = require("joi");
const Context_joi_1 = require("./Context.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.LogicAlgorithmJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('LogicAlgorithm'),
    algorithm: Joi.string(),
    context: Joi.object(Context_joi_1.ContextJoi),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    language: Joi.string().valid('javascript'),
    lifecycleStatus: Joi.string(),
    name: Joi.string().required(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=LogicAlgorithm.joi.js.map