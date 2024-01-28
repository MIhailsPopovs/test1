"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsCreateEventModel = void 0;
const GroupAlarmsCreateEventPayload_model_1 = require("./GroupAlarmsCreateEventPayload.model");
exports.GroupAlarmsCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: GroupAlarmsCreateEventPayload_model_1.GroupAlarmsCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=GroupAlarmsCreateEvent.model.js.map