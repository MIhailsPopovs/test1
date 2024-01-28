"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsModel = void 0;
const Alarm_model_1 = require("./Alarm.model");
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.ClearAlarmsModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alarmClearedTime: Date,
    alarmPattern: { '#type': [Alarm_model_1.AlarmModel], default: undefined },
    clearSystemId: String,
    clearUserId: String,
    clearedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    href: String,
    id: String,
    state: String,
};
//# sourceMappingURL=ClearAlarms.model.js.map