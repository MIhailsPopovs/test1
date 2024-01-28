"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderInformationRequiredEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOrder_joi_1 = require("./ProductOrder.joi");
exports.ProductOrderInformationRequiredEventPayloadJoi = {
    productOrder: Joi.object(ProductOrder_joi_1.ProductOrderJoi),
};
//# sourceMappingURL=ProductOrderInformationRequiredEventPayload.joi.js.map