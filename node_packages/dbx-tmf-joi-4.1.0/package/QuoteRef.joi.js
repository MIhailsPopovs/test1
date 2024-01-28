"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteRefJoi = void 0;
const Joi = require("joi");
exports.QuoteRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Quote'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('QuoteRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=QuoteRef.joi.js.map