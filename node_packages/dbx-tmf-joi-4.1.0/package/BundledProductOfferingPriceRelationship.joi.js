"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundledProductOfferingPriceRelationshipJoi = void 0;
const Joi = require("joi");
exports.BundledProductOfferingPriceRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('BundledProductOfferingPriceRelationship'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=BundledProductOfferingPriceRelationship.joi.js.map