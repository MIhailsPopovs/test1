"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminationErrorJoi = void 0;
const Joi = require("joi");
exports.TerminationErrorJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('TerminationError'),
    id: Joi.string(),
    value: Joi.string(),
};
//# sourceMappingURL=TerminationError.joi.js.map