"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPrice_CreateModel = void 0;
const BundledProductOfferingPriceRelationship_model_1 = require("./BundledProductOfferingPriceRelationship.model");
const ConstraintRef_model_1 = require("./ConstraintRef.model");
const PlaceRef_model_1 = require("./PlaceRef.model");
const ProductOfferingPriceRelationship_model_1 = require("./ProductOfferingPriceRelationship.model");
const Money_model_1 = require("./Money.model");
const PricingLogicAlgorithm_model_1 = require("./PricingLogicAlgorithm.model");
const ProductSpecificationCharacteristicValueUse_model_1 = require("./ProductSpecificationCharacteristicValueUse.model");
const ProductOfferingTerm_model_1 = require("./ProductOfferingTerm.model");
const TaxItem_model_1 = require("./TaxItem.model");
const Quantity_model_1 = require("./Quantity.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductOfferingPrice_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    bundledPopRelationship: {
        '#type': [BundledProductOfferingPriceRelationship_model_1.BundledProductOfferingPriceRelationshipModel],
        default: undefined,
    },
    constraint: { '#type': [ConstraintRef_model_1.ConstraintRefModel], default: undefined },
    description: String,
    isBundle: Boolean,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    percentage: Number,
    place: { '#type': [PlaceRef_model_1.PlaceRefModel], default: undefined },
    popRelationship: {
        '#type': [ProductOfferingPriceRelationship_model_1.ProductOfferingPriceRelationshipModel],
        default: undefined,
    },
    price: Money_model_1.MoneyModel,
    priceType: String,
    pricingLogicAlgorithm: {
        '#type': [PricingLogicAlgorithm_model_1.PricingLogicAlgorithmModel],
        default: undefined,
    },
    prodSpecCharValueUse: {
        '#type': [ProductSpecificationCharacteristicValueUse_model_1.ProductSpecificationCharacteristicValueUseModel],
        default: undefined,
    },
    productOfferingTerm: {
        '#type': [ProductOfferingTerm_model_1.ProductOfferingTermModel],
        default: undefined,
    },
    recurringChargePeriodLength: Number,
    recurringChargePeriodType: String,
    tax: { '#type': [TaxItem_model_1.TaxItemModel], default: undefined },
    unitOfMeasure: Quantity_model_1.QuantityModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ProductOfferingPrice_Create.model.js.map