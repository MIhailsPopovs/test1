"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
exports.AlarmCreateEventPayloadJoi = {
    alarm: Joi.object(Alarm_joi_1.AlarmJoi),
};
//# sourceMappingURL=AlarmCreateEventPayload.joi.js.map