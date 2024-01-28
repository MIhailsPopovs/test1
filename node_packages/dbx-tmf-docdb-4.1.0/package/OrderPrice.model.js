"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPriceModel = void 0;
const BillingAccountRef_model_1 = require("./BillingAccountRef.model");
const Price_model_1 = require("./Price.model");
const PriceAlteration_model_1 = require("./PriceAlteration.model");
const ProductOfferingPriceRef_model_1 = require("./ProductOfferingPriceRef.model");
exports.OrderPriceModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    billingAccount: BillingAccountRef_model_1.BillingAccountRefModel,
    description: String,
    name: String,
    price: Price_model_1.PriceModel,
    priceAlteration: { '#type': [PriceAlteration_model_1.PriceAlterationModel], default: undefined },
    priceType: String,
    productOfferingPrice: ProductOfferingPriceRef_model_1.ProductOfferingPriceRefModel,
    recurringChargePeriod: String,
    unitOfMeasure: String,
};
//# sourceMappingURL=OrderPrice.model.js.map