"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingPrice_joi_1 = require("./ProductOfferingPrice.joi");
exports.ProductOfferingPriceCreateEventPayloadJoi = {
    productOfferingPrice: Joi.object(ProductOfferingPrice_joi_1.ProductOfferingPriceJoi),
};
//# sourceMappingURL=ProductOfferingPriceCreateEventPayload.joi.js.map