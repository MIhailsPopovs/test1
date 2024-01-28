"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceStateChangeEventModel = void 0;
const ResourceStateChangeEventPayload_model_1 = require("./ResourceStateChangeEventPayload.model");
exports.ResourceStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ResourceStateChangeEventPayload_model_1.ResourceStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ResourceStateChangeEvent.model.js.map