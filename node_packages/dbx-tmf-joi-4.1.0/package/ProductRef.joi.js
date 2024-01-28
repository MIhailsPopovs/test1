"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRefJoi = void 0;
const Joi = require("joi");
exports.ProductRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Product'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ProductRef.joi.js.map