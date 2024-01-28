"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationshipJoi = void 0;
const Joi = require("joi");
const ProductRefOrValue_joi_1 = require("./ProductRefOrValue.joi");
exports.ProductRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductRelationship'),
    product: Joi.object(ProductRefOrValue_joi_1.ProductRefOrValueJoi).required(),
    relationshipType: Joi.string().required(),
};
//# sourceMappingURL=ProductRelationship.joi.js.map