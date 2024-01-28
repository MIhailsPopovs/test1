"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodRefJoi = void 0;
const Joi = require("joi");
exports.PaymentMethodRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('PaymentMethod'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('PaymentMethodRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=PaymentMethodRef.joi.js.map