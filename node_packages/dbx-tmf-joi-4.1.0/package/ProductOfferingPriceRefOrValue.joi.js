"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceRefOrValueJoi = void 0;
const Joi = require("joi");
const ConstraintRef_joi_1 = require("./ConstraintRef.joi");
const tools_1 = require("./tools");
const ProductPriceValue_joi_1 = require("./ProductPriceValue.joi");
const POPAlteration_joi_1 = require("./POPAlteration.joi");
const Quantity_joi_1 = require("./Quantity.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOfferingPriceRefOrValueJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingPriceRefOrValue'),
    constraint: Joi.array().items(Joi.object(ConstraintRef_joi_1.ConstraintRefJoi)),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    price: Joi.object(ProductPriceValue_joi_1.ProductPriceValueJoi),
    priceAlteration: Joi.array().items(Joi.object(POPAlteration_joi_1.POPAlterationJoi)),
    priceType: Joi.string(),
    recurringChargePeriod: Joi.string(),
    recurringChargePeriodLength: Joi.number(),
    unitOfMeasure: Joi.object(Quantity_joi_1.QuantityJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ProductOfferingPriceRefOrValue.joi.js.map