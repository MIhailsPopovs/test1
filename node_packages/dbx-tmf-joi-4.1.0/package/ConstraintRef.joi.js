"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintRefJoi = void 0;
const Joi = require("joi");
exports.ConstraintRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Constraint'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ConstraintRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    version: Joi.number(),
};
//# sourceMappingURL=ConstraintRef.joi.js.map