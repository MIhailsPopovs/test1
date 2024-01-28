"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsStateChangeEventModel = void 0;
const UnAckAlarmsStateChangeEventPayload_model_1 = require("./UnAckAlarmsStateChangeEventPayload.model");
exports.UnAckAlarmsStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: UnAckAlarmsStateChangeEventPayload_model_1.UnAckAlarmsStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=UnAckAlarmsStateChangeEvent.model.js.map