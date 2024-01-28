"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRefJoi = void 0;
const Joi = require("joi");
exports.ResourceRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Resource'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ResourceRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    value: Joi.string(),
};
//# sourceMappingURL=ResourceRef.joi.js.map