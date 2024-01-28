"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOffering_joi_1 = require("./ProductOffering.joi");
exports.ProductOfferingDeleteEventPayloadJoi = {
    productOffering: Joi.object(ProductOffering_joi_1.ProductOfferingJoi),
};
//# sourceMappingURL=ProductOfferingDeleteEventPayload.joi.js.map