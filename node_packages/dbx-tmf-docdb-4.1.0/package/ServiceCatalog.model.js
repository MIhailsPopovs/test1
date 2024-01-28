"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogModel = void 0;
const ServiceCategoryRef_model_1 = require("./ServiceCategoryRef.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ServiceCatalogModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    category: { '#type': [ServiceCategoryRef_model_1.ServiceCategoryRefModel], default: undefined },
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
//# sourceMappingURL=ServiceCatalog.model.js.map