"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderJoi = void 0;
const Joi = require("joi");
const ProductOrderRef_joi_1 = require("./ProductOrderRef.joi");
exports.CancelProductOrderJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CancelProductOrder'),
    cancellationReason: Joi.string(),
    effectiveCancellationDate: Joi.date(),
    href: Joi.string().uri(),
    id: Joi.string(),
    productOrder: Joi.object(ProductOrderRef_joi_1.ProductOrderRefJoi).required(),
    requestedCancellationDate: Joi.date(),
    state: Joi.string().valid('accepted', 'terminatedWithError', 'inProgress', 'done'),
};
//# sourceMappingURL=CancelProductOrder.joi.js.map