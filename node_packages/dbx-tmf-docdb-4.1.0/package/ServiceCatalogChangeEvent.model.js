"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogChangeEventModel = void 0;
const ServiceCatalogChangeEventPayload_model_1 = require("./ServiceCatalogChangeEventPayload.model");
exports.ServiceCatalogChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCatalogChangeEventPayload_model_1.ServiceCatalogChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCatalogChangeEvent.model.js.map