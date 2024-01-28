"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedProductOrderItemJoi = void 0;
const Joi = require("joi");
exports.RelatedProductOrderItemJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RelatedProductOrderItem'),
    orderItemAction: Joi.string(),
    orderItemId: Joi.string().required(),
    productOrderHref: Joi.string(),
    productOrderId: Joi.string().required(),
    role: Joi.string(),
};
//# sourceMappingURL=RelatedProductOrderItem.joi.js.map