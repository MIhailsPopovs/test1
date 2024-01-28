"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTermJoi = void 0;
const Joi = require("joi");
const Quantity_joi_1 = require("./Quantity.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductTermJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductTerm'),
    description: Joi.string(),
    duration: Joi.object(Quantity_joi_1.QuantityJoi),
    name: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ProductTerm.joi.js.map