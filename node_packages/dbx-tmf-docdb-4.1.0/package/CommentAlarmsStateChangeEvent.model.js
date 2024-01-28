"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsStateChangeEventModel = void 0;
const CommentAlarmsStateChangeEventPayload_model_1 = require("./CommentAlarmsStateChangeEventPayload.model");
exports.CommentAlarmsStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CommentAlarmsStateChangeEventPayload_model_1.CommentAlarmsStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CommentAlarmsStateChangeEvent.model.js.map