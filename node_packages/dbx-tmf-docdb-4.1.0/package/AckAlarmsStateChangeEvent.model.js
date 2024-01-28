"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsStateChangeEventModel = void 0;
const AckAlarmsStateChangeEventPayload_model_1 = require("./AckAlarmsStateChangeEventPayload.model");
exports.AckAlarmsStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: AckAlarmsStateChangeEventPayload_model_1.AckAlarmsStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=AckAlarmsStateChangeEvent.model.js.map