"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsModel = void 0;
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
const Alarm_model_1 = require("./Alarm.model");
exports.AckAlarmsModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    ackSystemId: String,
    ackTime: Date,
    ackUserId: String,
    ackedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    alarmPattern: { '#type': [Alarm_model_1.AlarmModel], default: undefined },
    href: String,
    id: String,
    state: String,
};
//# sourceMappingURL=AckAlarms.model.js.map