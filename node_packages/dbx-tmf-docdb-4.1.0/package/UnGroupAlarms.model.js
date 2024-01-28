"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarmsModel = void 0;
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.UnGroupAlarmsModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alarmChangedTime: Date,
    correlatedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    href: String,
    id: String,
    parentAlarm: AlarmRefOrValue_model_1.AlarmRefOrValueModel,
    sourceSystemId: String,
    state: String,
    unGroupedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
};
//# sourceMappingURL=UnGroupAlarms.model.js.map