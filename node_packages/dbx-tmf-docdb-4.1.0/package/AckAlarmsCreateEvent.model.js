"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsCreateEventModel = void 0;
const AckAlarmsCreateEventPayload_model_1 = require("./AckAlarmsCreateEventPayload.model");
exports.AckAlarmsCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: AckAlarmsCreateEventPayload_model_1.AckAlarmsCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=AckAlarmsCreateEvent.model.js.map