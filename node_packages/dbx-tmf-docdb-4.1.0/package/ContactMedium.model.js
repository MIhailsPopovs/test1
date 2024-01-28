"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactMediumModel = void 0;
const MediumCharacteristic_model_1 = require("./MediumCharacteristic.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ContactMediumModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    characteristic: MediumCharacteristic_model_1.MediumCharacteristicModel,
    mediumType: String,
    preferred: Boolean,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ContactMedium.model.js.map