"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceRefJoi = void 0;
const Joi = require("joi");
exports.ProductOfferingPriceRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ProductOfferingPrice'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingPriceRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ProductOfferingPriceRef.joi.js.map