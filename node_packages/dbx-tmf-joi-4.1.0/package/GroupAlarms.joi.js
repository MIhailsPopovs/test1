"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsJoi = void 0;
const Joi = require("joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.GroupAlarmsJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('GroupAlarms'),
    alarmChangedTime: Joi.date(),
    correlatedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    groupedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    href: Joi.string().uri(),
    id: Joi.string(),
    parentAlarm: Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi),
    sourceSystemId: Joi.string(),
    state: Joi.string(),
};
//# sourceMappingURL=GroupAlarms.joi.js.map