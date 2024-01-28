"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderStateChangeEventModel = void 0;
const ServiceOrderStateChangeEventPayload_model_1 = require("./ServiceOrderStateChangeEventPayload.model");
exports.ServiceOrderStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceOrderStateChangeEventPayload_model_1.ServiceOrderStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceOrderStateChangeEvent.model.js.map