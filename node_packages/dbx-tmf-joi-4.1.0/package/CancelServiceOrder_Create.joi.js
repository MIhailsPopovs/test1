"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrder_CreateJoi = void 0;
const Joi = require("joi");
const ServiceOrderRef_joi_1 = require("./ServiceOrderRef.joi");
exports.CancelServiceOrder_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CancelServiceOrder'),
    cancellationReason: Joi.string(),
    requestedCancellationDate: Joi.date(),
    serviceOrder: Joi.object(ServiceOrderRef_joi_1.ServiceOrderRefJoi).required(),
};
//# sourceMappingURL=CancelServiceOrder_Create.joi.js.map