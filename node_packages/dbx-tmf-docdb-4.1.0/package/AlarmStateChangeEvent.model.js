"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmStateChangeEventModel = void 0;
const AlarmStateChangeEventPayload_model_1 = require("./AlarmStateChangeEventPayload.model");
exports.AlarmStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: AlarmStateChangeEventPayload_model_1.AlarmStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=AlarmStateChangeEvent.model.js.map