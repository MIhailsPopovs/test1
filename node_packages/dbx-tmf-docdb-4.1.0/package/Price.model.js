"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceModel = void 0;
const Money_model_1 = require("./Money.model");
exports.PriceModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    dutyFreeAmount: Money_model_1.MoneyModel,
    percentage: Number,
    taxIncludedAmount: Money_model_1.MoneyModel,
    taxRate: Number,
};
//# sourceMappingURL=Price.model.js.map