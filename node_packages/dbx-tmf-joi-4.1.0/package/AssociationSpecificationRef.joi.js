"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociationSpecificationRefJoi = void 0;
const Joi = require("joi");
exports.AssociationSpecificationRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('AssociationSpecification'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AssociationSpecificationRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=AssociationSpecificationRef.joi.js.map