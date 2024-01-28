"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCandidateRefJoi = void 0;
const Joi = require("joi");
exports.ResourceCandidateRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ResourceCandidate'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ResourceCandidateRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    version: Joi.number(),
};
//# sourceMappingURL=ResourceCandidateRef.joi.js.map