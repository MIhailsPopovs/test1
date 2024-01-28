"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
exports.AlarmStateChangeEventPayloadJoi = {
    alarm: Joi.object(Alarm_joi_1.AlarmJoi),
};
//# sourceMappingURL=AlarmStateChangeEventPayload.joi.js.map