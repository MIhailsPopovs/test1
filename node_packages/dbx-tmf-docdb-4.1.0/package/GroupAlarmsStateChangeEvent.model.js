"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsStateChangeEventModel = void 0;
const GroupAlarmsStateChangeEventPayload_model_1 = require("./GroupAlarmsStateChangeEventPayload.model");
exports.GroupAlarmsStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: GroupAlarmsStateChangeEventPayload_model_1.GroupAlarmsStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=GroupAlarmsStateChangeEvent.model.js.map