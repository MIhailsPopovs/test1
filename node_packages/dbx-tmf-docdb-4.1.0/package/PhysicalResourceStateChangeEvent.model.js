"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceStateChangeEventModel = void 0;
const PhysicalResourceStateChangeEventPayload_model_1 = require("./PhysicalResourceStateChangeEventPayload.model");
exports.PhysicalResourceStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PhysicalResourceStateChangeEventPayload_model_1.PhysicalResourceStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PhysicalResourceStateChangeEvent.model.js.map