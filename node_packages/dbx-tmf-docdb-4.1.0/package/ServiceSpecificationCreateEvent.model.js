"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationCreateEventModel = void 0;
const ServiceSpecificationCreateEventPayload_model_1 = require("./ServiceSpecificationCreateEventPayload.model");
exports.ServiceSpecificationCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceSpecificationCreateEventPayload_model_1.ServiceSpecificationCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceSpecificationCreateEvent.model.js.map