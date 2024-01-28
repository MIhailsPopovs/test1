"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrder_CreateModel = void 0;
const ProductOrderRef_model_1 = require("./ProductOrderRef.model");
exports.CancelProductOrder_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    cancellationReason: String,
    productOrder: ProductOrderRef_model_1.ProductOrderRefModel,
    requestedCancellationDate: Date,
};
//# sourceMappingURL=CancelProductOrder_Create.model.js.map