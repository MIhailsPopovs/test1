"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidate_CreateModel = void 0;
const ServiceCategoryRef_model_1 = require("./ServiceCategoryRef.model");
const ServiceSpecificationRef_model_1 = require("./ServiceSpecificationRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ServiceCandidate_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    category: { '#type': [ServiceCategoryRef_model_1.ServiceCategoryRefModel], default: undefined },
    description: String,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    serviceSpecification: ServiceSpecificationRef_model_1.ServiceSpecificationRefModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ServiceCandidate_Create.model.js.map