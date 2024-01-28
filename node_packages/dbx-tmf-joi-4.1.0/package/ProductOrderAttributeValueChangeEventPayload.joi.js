"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOrder_joi_1 = require("./ProductOrder.joi");
exports.ProductOrderAttributeValueChangeEventPayloadJoi = {
    productOrder: Joi.object(ProductOrder_joi_1.ProductOrderJoi),
};
//# sourceMappingURL=ProductOrderAttributeValueChangeEventPayload.joi.js.map