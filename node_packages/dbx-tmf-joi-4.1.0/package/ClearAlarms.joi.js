"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.ClearAlarmsJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ClearAlarms'),
    alarmClearedTime: Joi.date(),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)),
    clearSystemId: Joi.string(),
    clearUserId: Joi.string(),
    clearedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    href: Joi.string().uri(),
    id: Joi.string(),
    state: Joi.string(),
};
//# sourceMappingURL=ClearAlarms.joi.js.map