"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidate_CreateJoi = void 0;
const Joi = require("joi");
const ServiceCategoryRef_joi_1 = require("./ServiceCategoryRef.joi");
const tools_1 = require("./tools");
const ServiceSpecificationRef_joi_1 = require("./ServiceSpecificationRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ServiceCandidate_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceCandidate'),
    category: Joi.array().items(Joi.object(ServiceCategoryRef_joi_1.ServiceCategoryRefJoi)),
    description: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string().required(),
    serviceSpecification: Joi.object(ServiceSpecificationRef_joi_1.ServiceSpecificationRefJoi).required(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceCandidate_Create.joi.js.map