"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditProfileJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.CreditProfileJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CreditProfile'),
    creditProfileDate: Joi.date().required(),
    creditRiskRating: Joi.number(),
    creditScore: Joi.number(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional().required(),
};
//# sourceMappingURL=CreditProfile.joi.js.map