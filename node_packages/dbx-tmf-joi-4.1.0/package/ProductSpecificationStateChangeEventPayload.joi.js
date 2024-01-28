"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductSpecification_joi_1 = require("./ProductSpecification.joi");
exports.ProductSpecificationStateChangeEventPayloadJoi = {
    productSpecification: Joi.object(ProductSpecification_joi_1.ProductSpecificationJoi),
};
//# sourceMappingURL=ProductSpecificationStateChangeEventPayload.joi.js.map