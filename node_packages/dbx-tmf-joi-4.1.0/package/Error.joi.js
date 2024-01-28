"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorJoi = void 0;
const Joi = require("joi");
exports.ErrorJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Error'),
    code: Joi.string().required(),
    message: Joi.string(),
    reason: Joi.string().required(),
    referenceError: Joi.string().uri(),
    status: Joi.string(),
};
//# sourceMappingURL=Error.joi.js.map