"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsJoi = void 0;
const Joi = require("joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
const Alarm_joi_1 = require("./Alarm.joi");
exports.AckAlarmsJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AckAlarms'),
    ackSystemId: Joi.string(),
    ackTime: Joi.date(),
    ackUserId: Joi.string(),
    ackedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)),
    href: Joi.string().uri(),
    id: Joi.string(),
    state: Joi.string(),
};
//# sourceMappingURL=AckAlarms.joi.js.map