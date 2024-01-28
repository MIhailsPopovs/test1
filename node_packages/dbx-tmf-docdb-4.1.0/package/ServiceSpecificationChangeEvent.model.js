"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecificationChangeEventModel = void 0;
const ServiceSpecificationChangeEventPayload_model_1 = require("./ServiceSpecificationChangeEventPayload.model");
exports.ServiceSpecificationChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceSpecificationChangeEventPayload_model_1.ServiceSpecificationChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceSpecificationChangeEvent.model.js.map