"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionItemRefJoi = void 0;
const Joi = require("joi");
exports.ActionItemRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ActionItem').required(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('ActionItemRef'),
    action: Joi.string().valid('add', 'update', 'delete').required(),
    href: Joi.string().uri().required(),
    id: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required(),
    version: Joi.number().required(),
};
//# sourceMappingURL=ActionItemRef.joi.js.map