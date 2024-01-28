"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogStateChangeEventModel = void 0;
const CatalogStateChangeEventPayload_model_1 = require("./CatalogStateChangeEventPayload.model");
exports.CatalogStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CatalogStateChangeEventPayload_model_1.CatalogStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CatalogStateChangeEvent.model.js.map