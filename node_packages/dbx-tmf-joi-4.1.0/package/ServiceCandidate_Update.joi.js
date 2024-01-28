"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidate_UpdateJoi = void 0;
const Joi = require("joi");
const ServiceCategoryRef_joi_1 = require("./ServiceCategoryRef.joi");
const ServiceSpecificationRef_joi_1 = require("./ServiceSpecificationRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ServiceCandidate_UpdateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceCandidate'),
    category: Joi.array().items(Joi.object(ServiceCategoryRef_joi_1.ServiceCategoryRefJoi)),
    description: Joi.string(),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    serviceSpecification: Joi.object(ServiceSpecificationRef_joi_1.ServiceSpecificationRefJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceCandidate_Update.joi.js.map