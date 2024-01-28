"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.UnAckAlarmsJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('UnAckAlarms'),
    ackSystemId: Joi.string(),
    ackTime: Joi.date(),
    ackUserId: Joi.string(),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)),
    href: Joi.string().uri(),
    id: Joi.string(),
    state: Joi.string(),
    unAckedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
};
//# sourceMappingURL=UnAckAlarms.joi.js.map