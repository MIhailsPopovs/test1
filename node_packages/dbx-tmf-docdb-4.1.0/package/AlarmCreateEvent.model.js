"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmCreateEventModel = void 0;
const AlarmCreateEventPayload_model_1 = require("./AlarmCreateEventPayload.model");
exports.AlarmCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: AlarmCreateEventPayload_model_1.AlarmCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=AlarmCreateEvent.model.js.map