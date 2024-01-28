"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogCreateEventModel = void 0;
const ServiceCatalogCreateEventPayload_model_1 = require("./ServiceCatalogCreateEventPayload.model");
exports.ServiceCatalogCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCatalogCreateEventPayload_model_1.ServiceCatalogCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCatalogCreateEvent.model.js.map