"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRefJoi = void 0;
const Joi = require("joi");
exports.PaymentRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Payment'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('PaymentRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=PaymentRef.joi.js.map