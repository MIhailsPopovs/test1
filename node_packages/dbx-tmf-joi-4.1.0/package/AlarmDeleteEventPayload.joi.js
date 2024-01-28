"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
exports.AlarmDeleteEventPayloadJoi = {
    alarm: Joi.object(Alarm_joi_1.AlarmJoi),
};
//# sourceMappingURL=AlarmDeleteEventPayload.joi.js.map