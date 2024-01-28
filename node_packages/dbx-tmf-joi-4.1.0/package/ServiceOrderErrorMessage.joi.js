"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderErrorMessageJoi = void 0;
const Joi = require("joi");
const ServiceOrderItemRef_joi_1 = require("./ServiceOrderItemRef.joi");
exports.ServiceOrderErrorMessageJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderErrorMessage'),
    code: Joi.string(),
    message: Joi.string(),
    reason: Joi.string(),
    referenceError: Joi.string().uri(),
    serviceOrderItem: Joi.array().items(Joi.object(ServiceOrderItemRef_joi_1.ServiceOrderItemRefJoi)),
    status: Joi.string(),
    timestamp: Joi.date(),
};
//# sourceMappingURL=ServiceOrderErrorMessage.joi.js.map