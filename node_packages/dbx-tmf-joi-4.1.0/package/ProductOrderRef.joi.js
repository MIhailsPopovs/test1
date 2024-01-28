"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderRefJoi = void 0;
const Joi = require("joi");
exports.ProductOrderRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ProductOrder'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOrderRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ProductOrderRef.joi.js.map