"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingRefJoi = void 0;
const Joi = require("joi");
exports.ProductOfferingRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ProductOffering'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ProductOfferingRef.joi.js.map