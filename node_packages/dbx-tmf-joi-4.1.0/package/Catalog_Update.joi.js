"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_UpdateJoi = void 0;
const Joi = require("joi");
const CategoryRef_joi_1 = require("./CategoryRef.joi");
const RelatedParty_joi_1 = require("./RelatedParty.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.Catalog_UpdateJoi = {
    '@schemaLocation': Joi.string().uri(),
    catalogType: Joi.string(),
    category: Joi.array().items(Joi.object(CategoryRef_joi_1.CategoryRefJoi)),
    description: Joi.string(),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
    relatedParty: Joi.array().items(Joi.object(RelatedParty_joi_1.RelatedPartyJoi)),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=Catalog_Update.joi.js.map