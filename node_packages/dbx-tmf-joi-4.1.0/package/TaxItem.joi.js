"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxItemJoi = void 0;
const Joi = require("joi");
const Money_joi_1 = require("./Money.joi");
exports.TaxItemJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('TaxItem'),
    href: Joi.string().uri(),
    id: Joi.string(),
    taxAmount: Joi.object(Money_joi_1.MoneyJoi),
    taxCategory: Joi.string(),
    taxRate: Joi.number(),
};
//# sourceMappingURL=TaxItem.joi.js.map