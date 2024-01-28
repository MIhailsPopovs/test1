"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogAttributeValueChangeEventModel = void 0;
const CatalogAttributeValueChangeEventPayload_model_1 = require("./CatalogAttributeValueChangeEventPayload.model");
exports.CatalogAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CatalogAttributeValueChangeEventPayload_model_1.CatalogAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CatalogAttributeValueChangeEvent.model.js.map