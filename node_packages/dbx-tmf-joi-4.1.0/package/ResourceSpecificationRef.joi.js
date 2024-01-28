"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceSpecificationRefJoi = void 0;
const Joi = require("joi");
exports.ResourceSpecificationRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ResourceSpecification'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ResourceSpecificationRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    version: Joi.number(),
};
//# sourceMappingURL=ResourceSpecificationRef.joi.js.map