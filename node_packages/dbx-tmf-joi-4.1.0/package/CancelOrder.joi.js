"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelOrderJoi = void 0;
const Joi = require("joi");
exports.CancelOrderJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CancelOrder'),
    cancellationReason: Joi.string(),
    effectiveCancellationDate: Joi.date(),
    href: Joi.string().uri(),
    id: Joi.string(),
    requestedCancellationDate: Joi.date(),
    state: Joi.string().valid('accepted', 'terminatedWithError', 'inProgress', 'done'),
};
//# sourceMappingURL=CancelOrder.joi.js.map