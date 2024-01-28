"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteItemRefJoi = void 0;
const Joi = require("joi");
exports.QuoteItemRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('QuoteItem'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('QuoteItemRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    quoteHref: Joi.string(),
    quoteId: Joi.string().required(),
    quoteName: Joi.string(),
};
//# sourceMappingURL=QuoteItemRef.joi.js.map