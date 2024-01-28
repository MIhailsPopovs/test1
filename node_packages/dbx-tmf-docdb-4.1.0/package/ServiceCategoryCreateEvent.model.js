"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryCreateEventModel = void 0;
const ServiceCategoryCreateEventPayload_model_1 = require("./ServiceCategoryCreateEventPayload.model");
exports.ServiceCategoryCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCategoryCreateEventPayload_model_1.ServiceCategoryCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCategoryCreateEvent.model.js.map