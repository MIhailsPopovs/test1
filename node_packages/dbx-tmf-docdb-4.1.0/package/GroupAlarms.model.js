"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsModel = void 0;
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.GroupAlarmsModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alarmChangedTime: Date,
    correlatedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    groupedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    href: String,
    id: String,
    parentAlarm: AlarmRefOrValue_model_1.AlarmRefOrValueModel,
    sourceSystemId: String,
    state: String,
};
//# sourceMappingURL=GroupAlarms.model.js.map