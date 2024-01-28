"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOffering_joi_1 = require("./ProductOffering.joi");
exports.ProductOfferingStateChangeEventPayloadJoi = {
    productOffering: Joi.object(ProductOffering_joi_1.ProductOfferingJoi),
};
//# sourceMappingURL=ProductOfferingStateChangeEventPayload.joi.js.map