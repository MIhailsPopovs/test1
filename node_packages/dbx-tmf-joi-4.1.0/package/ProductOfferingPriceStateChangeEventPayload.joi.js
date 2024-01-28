"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingPrice_joi_1 = require("./ProductOfferingPrice.joi");
exports.ProductOfferingPriceStateChangeEventPayloadJoi = {
    productOfferingPrice: Joi.object(ProductOfferingPrice_joi_1.ProductOfferingPriceJoi),
};
//# sourceMappingURL=ProductOfferingPriceStateChangeEventPayload.joi.js.map