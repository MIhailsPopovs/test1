"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderCreateEventModel = void 0;
const ServiceOrderCreateEventPayload_model_1 = require("./ServiceOrderCreateEventPayload.model");
exports.ServiceOrderCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceOrderCreateEventPayload_model_1.ServiceOrderCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceOrderCreateEvent.model.js.map