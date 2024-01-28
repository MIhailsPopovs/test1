"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceDeleteEventModel = void 0;
const ResourceDeleteEventPayload_model_1 = require("./ResourceDeleteEventPayload.model");
exports.ResourceDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ResourceDeleteEventPayload_model_1.ResourceDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ResourceDeleteEvent.model.js.map