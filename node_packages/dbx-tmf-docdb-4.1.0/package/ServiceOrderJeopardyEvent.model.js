"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderJeopardyEventModel = void 0;
const ServiceOrderJeopardyEventPayload_model_1 = require("./ServiceOrderJeopardyEventPayload.model");
exports.ServiceOrderJeopardyEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceOrderJeopardyEventPayload_model_1.ServiceOrderJeopardyEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceOrderJeopardyEvent.model.js.map