"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ClearAlarms_joi_1 = require("./ClearAlarms.joi");
exports.ClearAlarmsStateChangeEventPayloadJoi = {
    clearAlarms: Joi.object(ClearAlarms_joi_1.ClearAlarmsJoi),
};
//# sourceMappingURL=ClearAlarmsStateChangeEventPayload.joi.js.map