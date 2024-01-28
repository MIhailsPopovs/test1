"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateJoi = void 0;
const Joi = require("joi");
const ServiceCategoryRef_joi_1 = require("./ServiceCategoryRef.joi");
const tools_1 = require("./tools");
const ServiceSpecificationRef_joi_1 = require("./ServiceSpecificationRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ServiceCandidateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceCandidate'),
    category: Joi.array().items(Joi.object(ServiceCategoryRef_joi_1.ServiceCategoryRefJoi)),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    serviceSpecification: Joi.object(ServiceSpecificationRef_joi_1.ServiceSpecificationRefJoi),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceCandidate.joi.js.map