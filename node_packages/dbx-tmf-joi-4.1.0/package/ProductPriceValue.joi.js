"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceValueJoi = void 0;
const Joi = require("joi");
const Money_joi_1 = require("./Money.joi");
exports.ProductPriceValueJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductPriceValue'),
    dutyFreeAmount: Joi.object(Money_joi_1.MoneyJoi),
    percentage: Joi.number(),
    taxCategory: Joi.string(),
    taxIncludedAmount: Joi.object(Money_joi_1.MoneyJoi),
    taxRate: Joi.number(),
};
//# sourceMappingURL=ProductPriceValue.joi.js.map