"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderMilestoneEventModel = void 0;
const ServiceOrderMilestoneEventPayload_model_1 = require("./ServiceOrderMilestoneEventPayload.model");
exports.ServiceOrderMilestoneEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceOrderMilestoneEventPayload_model_1.ServiceOrderMilestoneEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceOrderMilestoneEvent.model.js.map