"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRefJoi = void 0;
const Joi = require("joi");
exports.AccountRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Account'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AccountRef'),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string().required(),
};
//# sourceMappingURL=AccountRef.joi.js.map