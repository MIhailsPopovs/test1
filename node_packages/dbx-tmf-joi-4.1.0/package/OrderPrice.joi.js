"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPriceJoi = void 0;
const Joi = require("joi");
const BillingAccountRef_joi_1 = require("./BillingAccountRef.joi");
const Price_joi_1 = require("./Price.joi");
const PriceAlteration_joi_1 = require("./PriceAlteration.joi");
const ProductOfferingPriceRef_joi_1 = require("./ProductOfferingPriceRef.joi");
exports.OrderPriceJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('OrderPrice'),
    billingAccount: Joi.object(BillingAccountRef_joi_1.BillingAccountRefJoi),
    description: Joi.string(),
    name: Joi.string(),
    price: Joi.object(Price_joi_1.PriceJoi),
    priceAlteration: Joi.array().items(Joi.object(PriceAlteration_joi_1.PriceAlterationJoi)),
    priceType: Joi.string(),
    productOfferingPrice: Joi.object(ProductOfferingPriceRef_joi_1.ProductOfferingPriceRefJoi),
    recurringChargePeriod: Joi.string(),
    unitOfMeasure: Joi.string(),
};
//# sourceMappingURL=OrderPrice.joi.js.map