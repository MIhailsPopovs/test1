"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetEntitySchemaJoi = void 0;
const Joi = require("joi");
exports.TargetEntitySchemaJoi = {
    '@schemaLocation': Joi.string().required(),
    '@type': Joi.string().default('TargetEntitySchema').required(),
};
//# sourceMappingURL=TargetEntitySchema.joi.js.map