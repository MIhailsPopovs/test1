"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalog_CreateModel = void 0;
const ServiceCategoryRef_model_1 = require("./ServiceCategoryRef.model");
const RelatedParty_model_1 = require("./RelatedParty.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ServiceCatalog_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    category: { '#type': [ServiceCategoryRef_model_1.ServiceCategoryRefModel], default: undefined },
    description: String,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    relatedParty: { '#type': [RelatedParty_model_1.RelatedPartyModel], default: undefined },
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ServiceCatalog_Create.model.js.map