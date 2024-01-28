"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalog_CreateJoi = void 0;
const Joi = require("joi");
const ServiceCategoryRef_joi_1 = require("./ServiceCategoryRef.joi");
const tools_1 = require("./tools");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ServiceCatalog_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceCatalog'),
    category: Joi.array().items(Joi.object(ServiceCategoryRef_joi_1.ServiceCategoryRefJoi)),
    description: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string().required(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceCatalog_Create.joi.js.map