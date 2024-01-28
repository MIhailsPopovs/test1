"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingTermJoi = void 0;
const Joi = require("joi");
const Duration_joi_1 = require("./Duration.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOfferingTermJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingTerm'),
    description: Joi.string(),
    duration: Joi.object(Duration_joi_1.DurationJoi),
    name: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ProductOfferingTerm.joi.js.map