"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogModel = void 0;
const CategoryRef_model_1 = require("./CategoryRef.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.CatalogModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    catalogType: String,
    category: { '#type': [CategoryRef_model_1.CategoryRefModel], default: undefined },
    description: String,
    href: String,
    id: String,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=Catalog.model.js.map