"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductSpecification_joi_1 = require("./ProductSpecification.joi");
exports.ProductSpecificationCreateEventPayloadJoi = {
    productSpecification: Joi.object(ProductSpecification_joi_1.ProductSpecificationJoi),
};
//# sourceMappingURL=ProductSpecificationCreateEventPayload.joi.js.map