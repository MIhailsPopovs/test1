"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderDeleteEventModel = void 0;
const ServiceOrderDeleteEventPayload_model_1 = require("./ServiceOrderDeleteEventPayload.model");
exports.ServiceOrderDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceOrderDeleteEventPayload_model_1.ServiceOrderDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceOrderDeleteEvent.model.js.map