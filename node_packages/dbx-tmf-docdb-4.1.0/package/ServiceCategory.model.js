"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryModel = void 0;
const ServiceCategoryRef_model_1 = require("./ServiceCategoryRef.model");
const ServiceCandidateRef_model_1 = require("./ServiceCandidateRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ServiceCategoryModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    category: { '#type': [ServiceCategoryRef_model_1.ServiceCategoryRefModel], default: undefined },
    description: String,
    href: String,
    id: String,
    isRoot: Boolean,
    lastUpdate: Date,
    lifecycleStatus: String,
    name: String,
    parentId: String,
    serviceCandidate: { '#type': [ServiceCandidateRef_model_1.ServiceCandidateRefModel], default: undefined },
    validFor: TimePeriod_model_1.TimePeriodModel,
    version: Number,
};
//# sourceMappingURL=ServiceCategory.model.js.map