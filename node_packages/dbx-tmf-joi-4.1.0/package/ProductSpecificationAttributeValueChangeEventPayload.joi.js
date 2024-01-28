"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductSpecification_joi_1 = require("./ProductSpecification.joi");
exports.ProductSpecificationAttributeValueChangeEventPayloadJoi = {
    productSpecification: Joi.object(ProductSpecification_joi_1.ProductSpecificationJoi),
};
//# sourceMappingURL=ProductSpecificationAttributeValueChangeEventPayload.joi.js.map