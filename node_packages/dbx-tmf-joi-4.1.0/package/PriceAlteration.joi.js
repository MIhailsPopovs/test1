"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAlterationJoi = void 0;
const Joi = require("joi");
const Price_joi_1 = require("./Price.joi");
const ProductOfferingPriceRef_joi_1 = require("./ProductOfferingPriceRef.joi");
exports.PriceAlterationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('PriceAlteration'),
    applicationDuration: Joi.number(),
    description: Joi.string(),
    name: Joi.string(),
    price: Joi.object(Price_joi_1.PriceJoi).required(),
    priceType: Joi.string().required(),
    priority: Joi.number(),
    productOfferingPrice: Joi.object(ProductOfferingPriceRef_joi_1.ProductOfferingPriceRefJoi),
    recurringChargePeriod: Joi.string(),
    unitOfMeasure: Joi.string(),
};
//# sourceMappingURL=PriceAlteration.joi.js.map