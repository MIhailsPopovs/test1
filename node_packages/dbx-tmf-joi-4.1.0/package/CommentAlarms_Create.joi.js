"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarms_CreateJoi = void 0;
const Joi = require("joi");
const Alarm_joi_1 = require("./Alarm.joi");
const Comment_joi_1 = require("./Comment.joi");
const AlarmRefOrValue_joi_1 = require("./AlarmRefOrValue.joi");
exports.CommentAlarms_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CommentAlarms'),
    alarmPattern: Joi.array().items(Joi.object(Alarm_joi_1.AlarmJoi)).required(),
    comment: Joi.object(Comment_joi_1.CommentJoi).required(),
    commentedAlarm: Joi.array().items(Joi.object(AlarmRefOrValue_joi_1.AlarmRefOrValueJoi)),
    state: Joi.string(),
};
//# sourceMappingURL=CommentAlarms_Create.joi.js.map