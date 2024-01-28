"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceJoi = void 0;
const Joi = require("joi");
const BillingAccountRef_joi_1 = require("./BillingAccountRef.joi");
const Price_joi_1 = require("./Price.joi");
const ProductOfferingPriceRef_joi_1 = require("./ProductOfferingPriceRef.joi");
const PriceAlteration_joi_1 = require("./PriceAlteration.joi");
exports.ProductPriceJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductPrice'),
    billingAccount: Joi.object(BillingAccountRef_joi_1.BillingAccountRefJoi),
    description: Joi.string(),
    name: Joi.string(),
    price: Joi.object(Price_joi_1.PriceJoi).required(),
    priceType: Joi.string().required(),
    productOfferingPrice: Joi.object(ProductOfferingPriceRef_joi_1.ProductOfferingPriceRefJoi),
    productPriceAlteration: Joi.array().items(Joi.object(PriceAlteration_joi_1.PriceAlterationJoi)),
    recurringChargePeriod: Joi.string(),
    unitOfMeasure: Joi.string(),
};
//# sourceMappingURL=ProductPrice.joi.js.map