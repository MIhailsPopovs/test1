"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceModel = void 0;
const BillingAccountRef_model_1 = require("./BillingAccountRef.model");
const Price_model_1 = require("./Price.model");
const ProductOfferingPriceRef_model_1 = require("./ProductOfferingPriceRef.model");
const PriceAlteration_model_1 = require("./PriceAlteration.model");
exports.ProductPriceModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    billingAccount: BillingAccountRef_model_1.BillingAccountRefModel,
    description: String,
    name: String,
    price: Price_model_1.PriceModel,
    priceType: String,
    productOfferingPrice: ProductOfferingPriceRef_model_1.ProductOfferingPriceRefModel,
    productPriceAlteration: {
        '#type': [PriceAlteration_model_1.PriceAlterationModel],
        default: undefined,
    },
    recurringChargePeriod: String,
    unitOfMeasure: String,
};
//# sourceMappingURL=ProductPrice.model.js.map