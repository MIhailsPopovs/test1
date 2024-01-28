"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarms_CreateModel = void 0;
const AlarmRefOrValue_model_1 = require("./AlarmRefOrValue.model");
exports.GroupAlarms_CreateModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    alarmChangedTime: Date,
    correlatedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    groupedAlarm: { '#type': [AlarmRefOrValue_model_1.AlarmRefOrValueModel], default: undefined },
    parentAlarm: AlarmRefOrValue_model_1.AlarmRefOrValueModel,
    sourceSystemId: String,
    state: String,
};
//# sourceMappingURL=GroupAlarms_Create.model.js.map