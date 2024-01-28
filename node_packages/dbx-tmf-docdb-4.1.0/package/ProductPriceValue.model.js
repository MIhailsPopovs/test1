"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceValueModel = void 0;
const Money_model_1 = require("./Money.model");
exports.ProductPriceValueModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    dutyFreeAmount: Money_model_1.MoneyModel,
    percentage: Number,
    taxCategory: String,
    taxIncludedAmount: Money_model_1.MoneyModel,
    taxRate: Number,
};
//# sourceMappingURL=ProductPriceValue.model.js.map