"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateChangeEventModel = void 0;
const ServiceCandidateChangeEventPayload_model_1 = require("./ServiceCandidateChangeEventPayload.model");
exports.ServiceCandidateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCandidateChangeEventPayload_model_1.ServiceCandidateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCandidateChangeEvent.model.js.map