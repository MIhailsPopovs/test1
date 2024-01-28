"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationRefJoi = void 0;
const Joi = require("joi");
exports.ServiceSpecificationRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ServiceSpecification'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceSpecificationRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceSpecificationRef.joi.js.map