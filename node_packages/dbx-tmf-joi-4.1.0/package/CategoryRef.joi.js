"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRefJoi = void 0;
const Joi = require("joi");
exports.CategoryRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Category'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CategoryRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    version: Joi.number(),
};
//# sourceMappingURL=CategoryRef.joi.js.map