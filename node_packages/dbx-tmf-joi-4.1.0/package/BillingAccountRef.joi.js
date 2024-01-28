"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingAccountRefJoi = void 0;
const Joi = require("joi");
exports.BillingAccountRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('BillingAccount'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('BillingAccountRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=BillingAccountRef.joi.js.map