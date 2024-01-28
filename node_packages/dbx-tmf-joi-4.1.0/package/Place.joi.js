"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceJoi = void 0;
const Joi = require("joi");
exports.PlaceJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Place'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=Place.joi.js.map