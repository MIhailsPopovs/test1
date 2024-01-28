"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactMediumJoi = void 0;
const Joi = require("joi");
const MediumCharacteristic_joi_1 = require("./MediumCharacteristic.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ContactMediumJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ContactMedium'),
    characteristic: Joi.object(MediumCharacteristic_joi_1.MediumCharacteristicJoi).required(),
    mediumType: Joi.string().required(),
    preferred: Joi.boolean(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ContactMedium.joi.js.map