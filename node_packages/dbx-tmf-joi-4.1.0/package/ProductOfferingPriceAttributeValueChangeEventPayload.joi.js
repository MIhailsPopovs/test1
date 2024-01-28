"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingPrice_joi_1 = require("./ProductOfferingPrice.joi");
exports.ProductOfferingPriceAttributeValueChangeEventPayloadJoi = {
    productOfferingPrice: Joi.object(ProductOfferingPrice_joi_1.ProductOfferingPriceJoi),
};
//# sourceMappingURL=ProductOfferingPriceAttributeValueChangeEventPayload.joi.js.map