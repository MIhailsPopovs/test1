"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarms_CreateJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.UnAckAlarms_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('UnAckAlarms'),
    ackSystemId: Joi.string().required(),
    ackTime: Joi.date(),
    ackUserId: Joi.string().required(),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)).required(),
    state: Joi.string(),
    unAckedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
};
//# sourceMappingURL=UnAckAlarms_Create.joi.js.map