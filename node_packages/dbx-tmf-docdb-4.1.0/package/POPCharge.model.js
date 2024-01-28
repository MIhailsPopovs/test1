"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POPChargeModel = void 0;
const ConstraintRef_model_1 = require("./ConstraintRef.model");
const ProductPriceValue_model_1 = require("./ProductPriceValue.model");
const POPAlteration_model_1 = require("./POPAlteration.model");
const Quantity_model_1 = require("./Quantity.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.POPChargeModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    constraint: { '#type': [ConstraintRef_model_1.ConstraintRefModel], default: undefined },
    description: String,
    href: String,
    id: String,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    price: ProductPriceValue_model_1.ProductPriceValueModel,
    priceAlteration: { '#type': [POPAlteration_model_1.POPAlterationModel], default: undefined },
    priceType: String,
    recurringChargePeriod: String,
    recurringChargePeriodLength: Number,
    unitOfMeasure: Quantity_model_1.QuantityModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=POPCharge.model.js.map