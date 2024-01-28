"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossedThresholdInformationModel = void 0;
const ThresholdRef_model_1 = require("./ThresholdRef.model");
exports.CrossedThresholdInformationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    direction: String,
    granularity: String,
    indicatorName: String,
    indicatorUnit: String,
    observedValue: String,
    threshold: ThresholdRef_model_1.ThresholdRefModel,
    thresholdCrossingDescription: String,
};
//# sourceMappingURL=CrossedThresholdInformation.model.js.map