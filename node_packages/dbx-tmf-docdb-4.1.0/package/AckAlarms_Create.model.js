"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarms_CreateModel = void 0;
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
const Alarm_model_1 = require("./Alarm.model");
exports.AckAlarms_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    ackSystemId: String,
    ackTime: Date,
    ackUserId: String,
    ackedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    alarmPattern: { '#type': [Alarm_model_1.AlarmModel], default: undefined },
    state: String,
};
//# sourceMappingURL=AckAlarms_Create.model.js.map