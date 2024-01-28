"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedPartyJoi = void 0;
const Joi = require("joi");
exports.RelatedPartyJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().required(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RelatedParty'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    role: Joi.string(),
};
//# sourceMappingURL=RelatedParty.joi.js.map