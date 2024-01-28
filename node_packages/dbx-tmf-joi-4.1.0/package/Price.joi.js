"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceJoi = void 0;
const Joi = require("joi");
const Money_joi_1 = require("./Money.joi");
exports.PriceJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Price'),
    dutyFreeAmount: Joi.object(Money_joi_1.MoneyJoi),
    percentage: Joi.number(),
    taxIncludedAmount: Joi.object(Money_joi_1.MoneyJoi),
    taxRate: Joi.number(),
};
//# sourceMappingURL=Price.joi.js.map