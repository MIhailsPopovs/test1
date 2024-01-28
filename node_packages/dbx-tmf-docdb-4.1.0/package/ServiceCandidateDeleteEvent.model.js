"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateDeleteEventModel = void 0;
const ServiceCandidateDeleteEventPayload_model_1 = require("./ServiceCandidateDeleteEventPayload.model");
exports.ServiceCandidateDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCandidateDeleteEventPayload_model_1.ServiceCandidateDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCandidateDeleteEvent.model.js.map