"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderRelationshipJoi = void 0;
const Joi = require("joi");
exports.ServiceOrderRelationshipJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderRelationship'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    relationshipType: Joi.string().required(),
};
//# sourceMappingURL=ServiceOrderRelationship.joi.js.map