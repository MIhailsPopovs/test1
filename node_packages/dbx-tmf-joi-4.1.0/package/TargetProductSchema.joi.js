"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetProductSchemaJoi = void 0;
const Joi = require("joi");
exports.TargetProductSchemaJoi = {
    '@schemaLocation': Joi.string().uri().required(),
    '@type': Joi.string().default('TargetProductSchema').required(),
};
//# sourceMappingURL=TargetProductSchema.joi.js.map