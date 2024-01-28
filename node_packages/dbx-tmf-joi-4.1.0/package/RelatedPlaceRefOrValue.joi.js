"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedPlaceRefOrValueJoi = void 0;
const Joi = require("joi");
exports.RelatedPlaceRefOrValueJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RelatedPlaceRefOrValue'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    role: Joi.string().required(),
};
//# sourceMappingURL=RelatedPlaceRefOrValue.joi.js.map