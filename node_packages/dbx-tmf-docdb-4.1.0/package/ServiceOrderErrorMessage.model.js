"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderErrorMessageModel = void 0;
const ServiceOrderItemRef_model_1 = require("./ServiceOrderItemRef.model");
exports.ServiceOrderErrorMessageModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    code: String,
    message: String,
    reason: String,
    referenceError: String,
    serviceOrderItem: { '#type': [ServiceOrderItemRef_model_1.ServiceOrderItemRefModel], default: undefined },
    status: String,
    timestamp: Date,
};
//# sourceMappingURL=ServiceOrderErrorMessage.model.js.map