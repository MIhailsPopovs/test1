"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessageJoi = void 0;
const Joi = require("joi");
exports.ErrorMessageJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ErrorMessage'),
    code: Joi.string(),
    message: Joi.string(),
    reason: Joi.string(),
    referenceError: Joi.string().uri(),
    status: Joi.string(),
};
//# sourceMappingURL=ErrorMessage.joi.js.map