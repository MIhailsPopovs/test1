"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementRefJoi = void 0;
const Joi = require("joi");
exports.AgreementRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Agreement'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AgreementRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=AgreementRef.joi.js.map