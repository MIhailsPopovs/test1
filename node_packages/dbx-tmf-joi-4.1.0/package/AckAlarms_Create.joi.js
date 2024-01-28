"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarms_CreateJoi = void 0;
const Joi = require("joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
const Alarm_joi_1 = require("./Alarm.joi");
exports.AckAlarms_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AckAlarms'),
    ackSystemId: Joi.string().required(),
    ackTime: Joi.date(),
    ackUserId: Joi.string().required(),
    ackedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)).required(),
    state: Joi.string(),
};
//# sourceMappingURL=AckAlarms_Create.joi.js.map