"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsCreateEventModel = void 0;
const CommentAlarmsCreateEventPayload_model_1 = require("./CommentAlarmsCreateEventPayload.model");
exports.CommentAlarmsCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CommentAlarmsCreateEventPayload_model_1.CommentAlarmsCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CommentAlarmsCreateEvent.model.js.map