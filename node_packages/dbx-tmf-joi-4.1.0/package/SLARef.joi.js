"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLARefJoi = void 0;
const Joi = require("joi");
exports.SLARefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('SLA'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('SLARef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=SLARef.joi.js.map