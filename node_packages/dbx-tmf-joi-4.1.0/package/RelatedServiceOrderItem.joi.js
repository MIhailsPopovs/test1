"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedServiceOrderItemJoi = void 0;
const Joi = require("joi");
exports.RelatedServiceOrderItemJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RelatedServiceOrderItem'),
    href: Joi.string().uri(),
    id: Joi.string(),
    itemAction: Joi.string().valid('add', 'modify', 'delete', 'noChange'),
    itemId: Joi.string(),
    role: Joi.string(),
    serviceOrderHref: Joi.string(),
    serviceOrderId: Joi.string(),
};
//# sourceMappingURL=RelatedServiceOrderItem.joi.js.map