"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryJoi = void 0;
const Joi = require("joi");
const ServiceCategoryRef_joi_1 = require("./ServiceCategoryRef.joi");
const tools_1 = require("./tools");
const ServiceCandidateRef_joi_1 = require("./ServiceCandidateRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ServiceCategoryJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceCategory'),
    category: Joi.array().items(Joi.object(ServiceCategoryRef_joi_1.ServiceCategoryRefJoi)),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    isRoot: Joi.boolean(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    parentId: Joi.string(),
    serviceCandidate: Joi.array().items(Joi.object(ServiceCandidateRef_joi_1.ServiceCandidateRefJoi)),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceCategory.joi.js.map