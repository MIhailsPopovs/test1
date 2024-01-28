"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOrder_joi_1 = require("./ProductOrder.joi");
exports.ProductOrderDeleteEventPayloadJoi = {
    productOrder: Joi.object(ProductOrder_joi_1.ProductOrderJoi),
};
//# sourceMappingURL=ProductOrderDeleteEventPayload.joi.js.map