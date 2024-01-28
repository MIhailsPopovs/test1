"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogDeleteEventModel = void 0;
const ServiceCatalogDeleteEventPayload_model_1 = require("./ServiceCatalogDeleteEventPayload.model");
exports.ServiceCatalogDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCatalogDeleteEventPayload_model_1.ServiceCatalogDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCatalogDeleteEvent.model.js.map