"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsStateChangeEventModel = void 0;
const ClearAlarmsStateChangeEventPayload_model_1 = require("./ClearAlarmsStateChangeEventPayload.model");
exports.ClearAlarmsStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ClearAlarmsStateChangeEventPayload_model_1.ClearAlarmsStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ClearAlarmsStateChangeEvent.model.js.map