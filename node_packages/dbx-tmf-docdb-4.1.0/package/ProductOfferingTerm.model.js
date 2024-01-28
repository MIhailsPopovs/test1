"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingTermModel = void 0;
const Duration_model_1 = require("./Duration.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductOfferingTermModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    description: String,
    duration: Duration_model_1.DurationModel,
    name: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ProductOfferingTerm.model.js.map