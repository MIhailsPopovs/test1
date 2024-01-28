"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOrder_joi_1 = require("./ProductOrder.joi");
exports.ProductOrderStateChangeEventPayloadJoi = {
    productOrder: Joi.object(ProductOrder_joi_1.ProductOrderJoi),
};
//# sourceMappingURL=ProductOrderStateChangeEventPayload.joi.js.map