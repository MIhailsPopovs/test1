"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarmsStateChangeEventModel = void 0;
const UnGroupAlarmsStateChangeEventPayload_model_1 = require("./UnGroupAlarmsStateChangeEventPayload.model");
exports.UnGroupAlarmsStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: UnGroupAlarmsStateChangeEventPayload_model_1.UnGroupAlarmsStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=UnGroupAlarmsStateChangeEvent.model.js.map