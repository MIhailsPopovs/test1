"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductSpecification_joi_1 = require("./ProductSpecification.joi");
exports.ProductSpecificationDeleteEventPayloadJoi = {
    productSpecification: Joi.object(ProductSpecification_joi_1.ProductSpecificationJoi),
};
//# sourceMappingURL=ProductSpecificationDeleteEventPayload.joi.js.map