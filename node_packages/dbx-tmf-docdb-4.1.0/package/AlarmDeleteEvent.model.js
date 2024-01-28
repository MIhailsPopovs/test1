"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmDeleteEventModel = void 0;
const AlarmDeleteEventPayload_model_1 = require("./AlarmDeleteEventPayload.model");
exports.AlarmDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: AlarmDeleteEventPayload_model_1.AlarmDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=AlarmDeleteEvent.model.js.map