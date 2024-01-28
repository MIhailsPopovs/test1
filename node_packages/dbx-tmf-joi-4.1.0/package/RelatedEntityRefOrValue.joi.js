"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedEntityRefOrValueJoi = void 0;
const Joi = require("joi");
exports.RelatedEntityRefOrValueJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RelatedEntityRefOrValue'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    role: Joi.string().required(),
};
//# sourceMappingURL=RelatedEntityRefOrValue.joi.js.map