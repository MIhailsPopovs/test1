"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderModel = void 0;
const ErrorMessage_model_1 = require("./ErrorMessage.model");
const ServiceOrderRef_model_1 = require("./ServiceOrderRef.model");
exports.CancelServiceOrderModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    cancellationReason: String,
    completionMessage: String,
    effectiveCancellationDate: Date,
    errorMessage: ErrorMessage_model_1.ErrorMessageModel,
    href: String,
    id: String,
    requestedCancellationDate: Date,
    serviceOrder: ServiceOrderRef_model_1.ServiceOrderRefModel,
    state: String,
};
//# sourceMappingURL=CancelServiceOrder.model.js.map