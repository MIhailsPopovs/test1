"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicSpecificationBaseModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.CharacteristicSpecificationBaseModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    '@valueSchemaLocation': String,
    configurable: Boolean,
    description: String,
    extensible: Boolean,
    id: String,
    isUnique: Boolean,
    maxCardinality: Number,
    minCardinality: Number,
    name: String,
    regex: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    valueType: String,
};
//# sourceMappingURL=CharacteristicSpecificationBase.model.js.map