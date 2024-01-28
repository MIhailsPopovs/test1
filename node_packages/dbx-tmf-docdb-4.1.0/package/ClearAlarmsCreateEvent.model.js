"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsCreateEventModel = void 0;
const ClearAlarmsCreateEventPayload_model_1 = require("./ClearAlarmsCreateEventPayload.model");
exports.ClearAlarmsCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ClearAlarmsCreateEventPayload_model_1.ClearAlarmsCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ClearAlarmsCreateEvent.model.js.map