"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceRefJoi = void 0;
const Joi = require("joi");
exports.PlaceRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Place'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('PlaceRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=PlaceRef.joi.js.map