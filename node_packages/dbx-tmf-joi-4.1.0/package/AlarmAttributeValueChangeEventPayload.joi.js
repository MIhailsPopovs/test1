"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
exports.AlarmAttributeValueChangeEventPayloadJoi = {
    alarm: Joi.object(Alarm_joi_1.AlarmJoi),
};
//# sourceMappingURL=AlarmAttributeValueChangeEventPayload.joi.js.map