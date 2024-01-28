"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarms_CreateJoi = void 0;
const Joi = require("joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.UnGroupAlarms_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('UnGroupAlarms'),
    alarmChangedTime: Joi.date().required(),
    correlatedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)).required(),
    parentAlarm: Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi).required(),
    sourceSystemId: Joi.string().required(),
    state: Joi.string(),
    unGroupedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
};
//# sourceMappingURL=UnGroupAlarms_Create.joi.js.map