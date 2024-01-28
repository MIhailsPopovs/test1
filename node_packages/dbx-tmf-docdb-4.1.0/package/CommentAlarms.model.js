"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsModel = void 0;
const Alarm_model_1 = require("./Alarm.model");
const Comment_model_1 = require("./Comment.model");
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.CommentAlarmsModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alarmPattern: { '#type': [Alarm_model_1.AlarmModel], default: undefined },
    comment: Comment_model_1.CommentModel,
    commentedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    href: String,
    id: String,
    state: String,
};
//# sourceMappingURL=CommentAlarms.model.js.map