"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogBatchEventModel = void 0;
const ServiceCatalogBatchEventPayload_model_1 = require("./ServiceCatalogBatchEventPayload.model");
exports.ServiceCatalogBatchEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCatalogBatchEventPayload_model_1.ServiceCatalogBatchEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCatalogBatchEvent.model.js.map