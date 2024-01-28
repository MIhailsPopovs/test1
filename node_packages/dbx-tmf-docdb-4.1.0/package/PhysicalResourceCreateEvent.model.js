"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceCreateEventModel = void 0;
const PhysicalResourceCreateEventPayload_model_1 = require("./PhysicalResourceCreateEventPayload.model");
exports.PhysicalResourceCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PhysicalResourceCreateEventPayload_model_1.PhysicalResourceCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PhysicalResourceCreateEvent.model.js.map