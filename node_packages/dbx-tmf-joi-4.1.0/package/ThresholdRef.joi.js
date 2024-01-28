"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThresholdRefJoi = void 0;
const Joi = require("joi");
exports.ThresholdRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Threshold'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ThresholdRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ThresholdRef.joi.js.map