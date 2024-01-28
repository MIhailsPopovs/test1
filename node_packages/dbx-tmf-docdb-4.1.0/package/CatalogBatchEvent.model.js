"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogBatchEventModel = void 0;
const CatalogBatchEventPayload_model_1 = require("./CatalogBatchEventPayload.model");
exports.CatalogBatchEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CatalogBatchEventPayload_model_1.CatalogBatchEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CatalogBatchEvent.model.js.map