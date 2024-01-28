"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalReferenceJoi = void 0;
const Joi = require("joi");
exports.ExternalReferenceJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ExternalReference'),
    externalReferenceType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string().required(),
};
//# sourceMappingURL=ExternalReference.joi.js.map