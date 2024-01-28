"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAlterationModel = void 0;
const Price_model_1 = require("./Price.model");
const ProductOfferingPriceRef_model_1 = require("./ProductOfferingPriceRef.model");
exports.PriceAlterationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    applicationDuration: Number,
    description: String,
    name: String,
    price: Price_model_1.PriceModel,
    priceType: String,
    priority: Number,
    productOfferingPrice: ProductOfferingPriceRef_model_1.ProductOfferingPriceRefModel,
    recurringChargePeriod: String,
    unitOfMeasure: String,
};
//# sourceMappingURL=PriceAlteration.model.js.map