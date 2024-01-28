"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePeriodJoi = void 0;
const Joi = require("joi");
exports.TimePeriodJoi = {
    endDateTime: Joi.date().min(Joi.ref('startDateTime')),
    startDateTime: Joi.date(),
};
//# sourceMappingURL=TimePeriod.joi.js.map