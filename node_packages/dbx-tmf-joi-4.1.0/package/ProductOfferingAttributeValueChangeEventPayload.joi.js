"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOffering_joi_1 = require("./ProductOffering.joi");
exports.ProductOfferingAttributeValueChangeEventPayloadJoi = {
    productOffering: Joi.object(ProductOffering_joi_1.ProductOfferingJoi),
};
//# sourceMappingURL=ProductOfferingAttributeValueChangeEventPayload.joi.js.map