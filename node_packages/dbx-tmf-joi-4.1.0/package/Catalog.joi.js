"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogJoi = void 0;
const Joi = require("joi");
const CategoryRef_joi_1 = require("./CategoryRef.joi");
const tools_1 = require("./tools");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.CatalogJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Catalog'),
    catalogType: Joi.string(),
    category: Joi.array().items(Joi.object(CategoryRef_joi_1.CategoryRefJoi)),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    lastUpdate: Joi.date().external(tools_1.generateDateTime),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=Catalog.joi.js.map