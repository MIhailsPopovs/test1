"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderJoi = void 0;
const Joi = require("joi");
const ErrorMessage_joi_1 = require("./ErrorMessage.joi");
const ServiceOrderRef_joi_1 = require("./ServiceOrderRef.joi");
exports.CancelServiceOrderJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CancelServiceOrder'),
    cancellationReason: Joi.string(),
    completionMessage: Joi.string(),
    effectiveCancellationDate: Joi.date(),
    errorMessage: Joi.object(ErrorMessage_joi_1.ErrorMessageJoi),
    href: Joi.string().uri(),
    id: Joi.string(),
    requestedCancellationDate: Joi.date(),
    serviceOrder: Joi.object(ServiceOrderRef_joi_1.ServiceOrderRefJoi),
    state: Joi.string().valid('accepted', 'terminatedWithError', 'inProgress', 'done'),
};
//# sourceMappingURL=CancelServiceOrder.joi.js.map