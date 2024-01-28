"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationRefJoi = void 0;
const Joi = require("joi");
const TargetProductSchema_joi_1 = require("./TargetProductSchema.joi");
exports.ProductSpecificationRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ProductSpecification'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductSpecificationRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    targetProductSchema: Joi.object(TargetProductSchema_joi_1.TargetProductSchemaJoi),
    version: Joi.number(),
};
//# sourceMappingURL=ProductSpecificationRef.joi.js.map