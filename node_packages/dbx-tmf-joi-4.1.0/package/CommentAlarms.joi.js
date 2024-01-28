"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
const Comment_joi_1 = require("./Comment.joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.CommentAlarmsJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CommentAlarms'),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)),
    comment: Joi.object(Comment_joi_1.CommentJoi),
    commentedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    href: Joi.string().uri(),
    id: Joi.string(),
    state: Joi.string(),
};
//# sourceMappingURL=CommentAlarms.joi.js.map