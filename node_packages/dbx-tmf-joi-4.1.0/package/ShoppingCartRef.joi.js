"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartRefJoi = void 0;
const Joi = require("joi");
exports.ShoppingCartRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ShoppingCart'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ShoppingCartRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
};
//# sourceMappingURL=ShoppingCartRef.joi.js.map