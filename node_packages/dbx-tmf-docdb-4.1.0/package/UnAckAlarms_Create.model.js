"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarms_CreateModel = void 0;
const Alarm_model_1 = require("./Alarm.model");
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.UnAckAlarms_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    ackSystemId: String,
    ackTime: Date,
    ackUserId: String,
    alarmPattern: { '#type': [Alarm_model_1.AlarmModel], default: undefined },
    state: String,
    unAckedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
};
//# sourceMappingURL=UnAckAlarms_Create.model.js.map