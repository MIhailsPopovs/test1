"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogDeleteEventModel = void 0;
const CatalogDeleteEventPayload_model_1 = require("./CatalogDeleteEventPayload.model");
exports.CatalogDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CatalogDeleteEventPayload_model_1.CatalogDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CatalogDeleteEvent.model.js.map