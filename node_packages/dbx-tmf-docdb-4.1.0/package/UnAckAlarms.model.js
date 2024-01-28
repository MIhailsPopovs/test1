"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsModel = void 0;
const Alarm_model_1 = require("./Alarm.model");
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.UnAckAlarmsModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    ackSystemId: String,
    ackTime: Date,
    ackUserId: String,
    alarmPattern: { '#type': [Alarm_model_1.AlarmModel], default: undefined },
    href: String,
    id: String,
    state: String,
    unAckedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
};
//# sourceMappingURL=UnAckAlarms.model.js.map