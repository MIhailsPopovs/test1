"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundledProductOfferingOptionJoi = void 0;
const Joi = require("joi");
exports.BundledProductOfferingOptionJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('BundledProductOfferingOption'),
    numberRelOfferDefault: Joi.number(),
    numberRelOfferLowerLimit: Joi.number(),
    numberRelOfferUpperLimit: Joi.number(),
    pricingStrategy: Joi.string(),
};
//# sourceMappingURL=BundledProductOfferingOption.joi.js.map