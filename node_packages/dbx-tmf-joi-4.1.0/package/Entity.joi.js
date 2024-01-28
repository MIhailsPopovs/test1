"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityJoi = void 0;
const Joi = require("joi");
exports.EntityJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Entity'),
    href: Joi.string().uri(),
    id: Joi.string(),
};
//# sourceMappingURL=Entity.joi.js.map