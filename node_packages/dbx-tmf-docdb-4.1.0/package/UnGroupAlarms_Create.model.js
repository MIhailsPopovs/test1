"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarms_CreateModel = void 0;
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.UnGroupAlarms_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alarmChangedTime: Date,
    correlatedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    parentAlarm: AlarmRefOrValue_model_1.AlarmRefOrValueModel,
    sourceSystemId: String,
    state: String,
    unGroupedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
};
//# sourceMappingURL=UnGroupAlarms_Create.model.js.map