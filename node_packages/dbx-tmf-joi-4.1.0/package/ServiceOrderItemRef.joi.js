"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemRefJoi = void 0;
const Joi = require("joi");
exports.ServiceOrderItemRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ServiceOrderItem'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderItemRef'),
    itemId: Joi.string(),
    serviceOrderHref: Joi.string().uri(),
    serviceOrderId: Joi.string(),
};
//# sourceMappingURL=ServiceOrderItemRef.joi.js.map