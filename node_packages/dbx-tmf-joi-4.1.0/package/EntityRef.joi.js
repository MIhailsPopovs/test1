"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRefJoi = void 0;
const Joi = require("joi");
exports.EntityRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Entity'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('EntityRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=EntityRef.joi.js.map