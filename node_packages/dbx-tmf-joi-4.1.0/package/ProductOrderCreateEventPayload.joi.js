"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOrder_joi_1 = require("./ProductOrder.joi");
exports.ProductOrderCreateEventPayloadJoi = {
    productOrder: Joi.object(ProductOrder_joi_1.ProductOrderJoi),
};
//# sourceMappingURL=ProductOrderCreateEventPayload.joi.js.map