"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementItemRefJoi = void 0;
const Joi = require("joi");
exports.AgreementItemRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('AgreementItem'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AgreementItemRef'),
    agreementItemId: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=AgreementItemRef.joi.js.map