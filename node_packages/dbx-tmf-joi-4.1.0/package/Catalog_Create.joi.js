"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_CreateJoi = void 0;
const Joi = require("joi");
const CategoryRef_joi_1 = require("./CategoryRef.joi");
const tools_1 = require("./tools");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.Catalog_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Catalog'),
    catalogType: Joi.string(),
    category: Joi.array().items(Joi.object(CategoryRef_joi_1.CategoryRefJoi)),
    description: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string().required(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=Catalog_Create.joi.js.map