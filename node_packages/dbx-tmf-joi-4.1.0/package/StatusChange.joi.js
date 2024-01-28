"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusChangeJoi = void 0;
const Joi = require("joi");
exports.StatusChangeJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('StatusChange'),
    changeDate: Joi.date(),
    changeReason: Joi.string(),
    status: Joi.string(),
};
//# sourceMappingURL=StatusChange.joi.js.map