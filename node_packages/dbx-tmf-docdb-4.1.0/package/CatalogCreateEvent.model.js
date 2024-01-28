"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogCreateEventModel = void 0;
const CatalogCreateEventPayload_model_1 = require("./CatalogCreateEventPayload.model");
exports.CatalogCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CatalogCreateEventPayload_model_1.CatalogCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CatalogCreateEvent.model.js.map