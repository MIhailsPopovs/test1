"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarms_CreateModel = void 0;
const Alarm_model_1 = require("./Alarm.model");
const Comment_model_1 = require("./Comment.model");
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.CommentAlarms_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alarmPattern: { '#type': [Alarm_model_1.AlarmModel], default: undefined },
    comment: Comment_model_1.CommentModel,
    commentedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    state: String,
};
//# sourceMappingURL=CommentAlarms_Create.model.js.map