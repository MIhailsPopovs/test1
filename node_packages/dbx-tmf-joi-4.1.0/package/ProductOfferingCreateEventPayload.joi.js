"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOffering_joi_1 = require("./ProductOffering.joi");
exports.ProductOfferingCreateEventPayloadJoi = {
    productOffering: Joi.object(ProductOffering_joi_1.ProductOfferingJoi),
};
//# sourceMappingURL=ProductOfferingCreateEventPayload.joi.js.map