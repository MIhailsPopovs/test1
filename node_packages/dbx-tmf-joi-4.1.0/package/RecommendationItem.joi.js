"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationItemJoi = void 0;
const Joi = require("joi");
const ProductRefOrValue_joi_1 = require("./ProductRefOrValue.joi");
const ProductOfferingRef_joi_1 = require("./ProductOfferingRef.joi");
exports.RecommendationItemJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RecommendationItem'),
    id: Joi.string(),
    priority: Joi.number(),
    product: Joi.object(ProductRefOrValue_joi_1.ProductRefOrValueJoi).required(),
    productOffering: Joi.object(ProductOfferingRef_joi_1.ProductOfferingRefJoi),
};
//# sourceMappingURL=RecommendationItem.joi.js.map