"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingPrice_joi_1 = require("./ProductOfferingPrice.joi");
exports.ProductOfferingPriceDeleteEventPayloadJoi = {
    productOfferingPrice: Joi.object(ProductOfferingPrice_joi_1.ProductOfferingPriceJoi),
};
//# sourceMappingURL=ProductOfferingPriceDeleteEventPayload.joi.js.map