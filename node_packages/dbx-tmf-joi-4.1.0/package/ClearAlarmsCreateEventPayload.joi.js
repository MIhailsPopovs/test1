"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ClearAlarms_joi_1 = require("./ClearAlarms.joi");
exports.ClearAlarmsCreateEventPayloadJoi = {
    clearAlarms: Joi.object(ClearAlarms_joi_1.ClearAlarmsJoi),
};
//# sourceMappingURL=ClearAlarmsCreateEventPayload.joi.js.map