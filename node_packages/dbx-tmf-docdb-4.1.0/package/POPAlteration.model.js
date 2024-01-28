"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POPAlterationModel = void 0;
const Duration_model_1 = require("./Duration.model");
const ProductPriceValue_model_1 = require("./ProductPriceValue.model");
const Quantity_model_1 = require("./Quantity.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.POPAlterationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    applicationDuration: Duration_model_1.DurationModel,
    description: String,
    href: String,
    id: String,
    name: String,
    price: ProductPriceValue_model_1.ProductPriceValueModel,
    priceType: String,
    priority: Number,
    recurringChargePeriod: String,
    unitOfMeasure: Quantity_model_1.QuantityModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=POPAlteration.model.js.map