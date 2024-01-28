"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceDeleteEventModel = void 0;
const PhysicalResourceDeleteEventPayload_model_1 = require("./PhysicalResourceDeleteEventPayload.model");
exports.PhysicalResourceDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PhysicalResourceDeleteEventPayload_model_1.PhysicalResourceDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PhysicalResourceDeleteEvent.model.js.map