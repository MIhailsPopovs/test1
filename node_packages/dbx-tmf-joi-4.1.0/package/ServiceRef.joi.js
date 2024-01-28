"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRefJoi = void 0;
const Joi = require("joi");
exports.ServiceRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Service'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ServiceRef.joi.js.map