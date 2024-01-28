"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POPAlterationJoi = void 0;
const Joi = require("joi");
const Duration_joi_1 = require("./Duration.joi");
const ProductPriceValue_joi_1 = require("./ProductPriceValue.joi");
const Quantity_joi_1 = require("./Quantity.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.POPAlterationJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('POPAlteration'),
    applicationDuration: Joi.object(Duration_joi_1.DurationJoi),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    price: Joi.object(ProductPriceValue_joi_1.ProductPriceValueJoi).required(),
    priceType: Joi.string().required(),
    priority: Joi.number(),
    recurringChargePeriod: Joi.string(),
    unitOfMeasure: Joi.object(Quantity_joi_1.QuantityJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=POPAlteration.joi.js.map