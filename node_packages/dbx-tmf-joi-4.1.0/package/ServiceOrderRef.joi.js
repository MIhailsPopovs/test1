"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderRefJoi = void 0;
const Joi = require("joi");
exports.ServiceOrderRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ServiceOrder'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ServiceOrderRef.joi.js.map