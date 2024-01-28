"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicValueSpecificationModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.CharacteristicValueSpecificationModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    isDefault: Boolean,
    rangeInterval: String,
    regex: String,
    unitOfMeasure: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
    value: Object,
    valueFrom: Number,
    valueTo: Number,
    valueType: String,
};
//# sourceMappingURL=CharacteristicValueSpecification.model.js.map