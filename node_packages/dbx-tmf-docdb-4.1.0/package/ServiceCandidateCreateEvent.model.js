"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateCreateEventModel = void 0;
const ServiceCandidateCreateEventPayload_model_1 = require("./ServiceCandidateCreateEventPayload.model");
exports.ServiceCandidateCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCandidateCreateEventPayload_model_1.ServiceCandidateCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCandidateCreateEvent.model.js.map