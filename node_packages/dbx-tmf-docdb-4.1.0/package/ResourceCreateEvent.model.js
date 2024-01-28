"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceCreateEventModel = void 0;
const ResourceCreateEventPayload_model_1 = require("./ResourceCreateEventPayload.model");
exports.ResourceCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ResourceCreateEventPayload_model_1.ResourceCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ResourceCreateEvent.model.js.map