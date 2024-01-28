"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationDeleteEventModel = void 0;
const ServiceSpecificationDeleteEventPayload_model_1 = require("./ServiceSpecificationDeleteEventPayload.model");
exports.ServiceSpecificationDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceSpecificationDeleteEventPayload_model_1.ServiceSpecificationDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceSpecificationDeleteEvent.model.js.map