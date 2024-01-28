"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsCreateEventModel = void 0;
const UnAckAlarmsCreateEventPayload_model_1 = require("./UnAckAlarmsCreateEventPayload.model");
exports.UnAckAlarmsCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: UnAckAlarmsCreateEventPayload_model_1.UnAckAlarmsCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=UnAckAlarmsCreateEvent.model.js.map