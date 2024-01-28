"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemErrorMessageJoi = void 0;
const Joi = require("joi");
exports.ServiceOrderItemErrorMessageJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderItemErrorMessage'),
    code: Joi.string(),
    message: Joi.string(),
    reason: Joi.string(),
    referenceError: Joi.string().uri(),
    status: Joi.string(),
    timestamp: Joi.date(),
};
//# sourceMappingURL=ServiceOrderItemErrorMessage.joi.js.map