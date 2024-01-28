"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxItemModel = void 0;
const Money_model_1 = require("./Money.model");
exports.TaxItemModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    href: String,
    id: String,
    taxAmount: Money_model_1.MoneyModel,
    taxCategory: String,
    taxRate: Number,
};
//# sourceMappingURL=TaxItem.model.js.map