"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateRefJoi = void 0;
const Joi = require("joi");
exports.ServiceCandidateRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ServiceCandidate'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceCandidateRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceCandidateRef.joi.js.map