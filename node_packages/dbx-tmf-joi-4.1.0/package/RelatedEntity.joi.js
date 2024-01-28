"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedEntityJoi = void 0;
const Joi = require("joi");
exports.RelatedEntityJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().required(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RelatedEntity'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    role: Joi.string().required(),
};
//# sourceMappingURL=RelatedEntity.joi.js.map