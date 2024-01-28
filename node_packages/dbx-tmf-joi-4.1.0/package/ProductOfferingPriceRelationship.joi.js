"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceRelationshipJoi = void 0;
const Joi = require("joi");
exports.ProductOfferingPriceRelationshipJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingPriceRelationship'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    relationshipType: Joi.string(),
    role: Joi.string(),
};
//# sourceMappingURL=ProductOfferingPriceRelationship.joi.js.map