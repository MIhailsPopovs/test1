"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarms_CreateJoi = void 0;
const Joi = require("joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.GroupAlarms_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('GroupAlarms'),
    alarmChangedTime: Joi.date().required(),
    correlatedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)).required(),
    groupedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    parentAlarm: Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi).required(),
    sourceSystemId: Joi.string().required(),
    state: Joi.string(),
};
//# sourceMappingURL=GroupAlarms_Create.joi.js.map