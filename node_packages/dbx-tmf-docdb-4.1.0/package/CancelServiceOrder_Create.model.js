"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrder_CreateModel = void 0;
const ServiceOrderRef_model_1 = require("./ServiceOrderRef.model");
exports.CancelServiceOrder_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    cancellationReason: String,
    requestedCancellationDate: Date,
    serviceOrder: ServiceOrderRef_model_1.ServiceOrderRefModel,
};
//# sourceMappingURL=CancelServiceOrder_Create.model.js.map