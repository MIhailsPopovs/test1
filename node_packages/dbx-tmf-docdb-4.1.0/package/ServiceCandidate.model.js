"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateModel = void 0;
const ServiceCategoryRef_model_1 = require("./ServiceCategoryRef.model");
const ServiceSpecificationRef_model_1 = require("./ServiceSpecificationRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ServiceCandidateModel = {
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
    serviceSpecification: ServiceSpecificationRef_model_1.ServiceSpecificationRefModel,
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ServiceCandidate.model.js.map