"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLevelSpecificationRefJoi = void 0;
const Joi = require("joi");
exports.ServiceLevelSpecificationRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ServiceLevelSpecification'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceLevelSpecificationRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ServiceLevelSpecificationRef.joi.js.map