"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_UpdateModel = void 0;
const CategoryRef_model_1 = require("./CategoryRef.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.Catalog_UpdateModel = {
    '@schemaLocation': String,
    catalogType: String,
    category: { '#type': [CategoryRef_model_1.CategoryRefModel], default: undefined },
    description: String,
    lifecycleStatus: String,
    name: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=Catalog_Update.model.js.map