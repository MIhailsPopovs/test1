"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderModel = void 0;
const ProductOrderRef_model_1 = require("./ProductOrderRef.model");
exports.CancelProductOrderModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    cancellationReason: String,
    effectiveCancellationDate: Date,
    href: String,
    id: String,
    productOrder: ProductOrderRef_model_1.ProductOrderRefModel,
    requestedCancellationDate: Date,
    state: String,
};
//# sourceMappingURL=CancelProductOrder.model.js.map