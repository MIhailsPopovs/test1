"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPrice_CreateJoi = void 0;
const Joi = require("joi");
const BundledProductOfferingPriceRelationship_joi_1 = require("./BundledProductOfferingPriceRelationship.joi");
const ConstraintRef_joi_1 = require("./ConstraintRef.joi");
const tools_1 = require("./tools");
const PlaceRef_joi_1 = require("./PlaceRef.joi");
const ProductOfferingPriceRelationship_joi_1 = require("./ProductOfferingPriceRelationship.joi");
const Money_joi_1 = require("./Money.joi");
const PricingLogicAlgorithm_joi_1 = require("./PricingLogicAlgorithm.joi");
const ProductSpecificationCharacteristicValueUse_joi_1 = require("./ProductSpecificationCharacteristicValueUse.joi");
const ProductOfferingTerm_joi_1 = require("./ProductOfferingTerm.joi");
const TaxItem_joi_1 = require("./TaxItem.joi");
const Quantity_joi_1 = require("./Quantity.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOfferingPrice_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('ProductOfferingPrice'),
    bundledPopRelationship: Joi.array().items(Joi.object(BundledProductOfferingPriceRelationship_joi_1.BundledProductOfferingPriceRelationshipJoi)),
    constraint: Joi.array().items(Joi.object(ConstraintRef_joi_1.ConstraintRefJoi)),
    description: Joi.string(),
    isBundle: Joi.boolean(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string().required(),
    percentage: Joi.number(),
    place: Joi.array().items(Joi.object(PlaceRef_joi_1.PlaceRefJoi)),
    popRelationship: Joi.array().items(Joi.object(ProductOfferingPriceRelationship_joi_1.ProductOfferingPriceRelationshipJoi)),
    price: Joi.object(Money_joi_1.MoneyJoi),
    priceType: Joi.string(),
    pricingLogicAlgorithm: Joi.array().items(Joi.object(PricingLogicAlgorithm_joi_1.PricingLogicAlgorithmJoi)),
    prodSpecCharValueUse: Joi.array().items(Joi.object(ProductSpecificationCharacteristicValueUse_joi_1.ProductSpecificationCharacteristicValueUseJoi)),
    productOfferingTerm: Joi.array().items(Joi.object(ProductOfferingTerm_joi_1.ProductOfferingTermJoi)),
    recurringChargePeriodLength: Joi.number(),
    recurringChargePeriodType: Joi.string(),
    tax: Joi.array().items(Joi.object(TaxItem_joi_1.TaxItemJoi)),
    unitOfMeasure: Joi.object(Quantity_joi_1.QuantityJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ProductOfferingPrice_Create.joi.js.map