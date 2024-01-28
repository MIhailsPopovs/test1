"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditProfileModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.CreditProfileModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    creditProfileDate: Date,
    creditRiskRating: Number,
    creditScore: Number,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=CreditProfile.model.js.map