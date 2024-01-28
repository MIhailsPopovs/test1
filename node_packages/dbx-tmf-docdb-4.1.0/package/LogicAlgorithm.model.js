"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicAlgorithmModel = void 0;
const Context_model_1 = require("./Context.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.LogicAlgorithmModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    algorithm: String,
    context: Context_model_1.ContextModel,
    description: String,
    href: String,
    id: String,
    language: String,
    lifecycleStatus: String,
    name: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=LogicAlgorithm.model.js.map