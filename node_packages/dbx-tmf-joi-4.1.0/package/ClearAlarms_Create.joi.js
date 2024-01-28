"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarms_CreateJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.ClearAlarms_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ClearAlarms'),
    alarmClearedTime: Joi.date().required(),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)).required(),
    clearSystemId: Joi.string().required(),
    clearUserId: Joi.string().required(),
    clearedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    state: Joi.string(),
};
//# sourceMappingURL=ClearAlarms_Create.joi.js.map