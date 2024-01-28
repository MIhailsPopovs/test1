"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTermModel = void 0;
const Quantity_model_1 = require("./Quantity.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductTermModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    description: String,
    duration: Quantity_model_1.QuantityModel,
    name: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ProductTerm.model.js.map