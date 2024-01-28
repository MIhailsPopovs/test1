"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundledProductSpecificationJoi = void 0;
const Joi = require("joi");
exports.BundledProductSpecificationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('BundledProductSpecification'),
    href: Joi.string().uri(),
    id: Joi.string(),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=BundledProductSpecification.joi.js.map