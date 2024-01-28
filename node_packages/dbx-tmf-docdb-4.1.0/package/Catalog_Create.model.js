"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_CreateModel = void 0;
const CategoryRef_model_1 = require("./CategoryRef.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.Catalog_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    catalogType: String,
    category: { '#type': [CategoryRef_model_1.CategoryRefModel], default: undefined },
    description: String,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=Catalog_Create.model.js.map