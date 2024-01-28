"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderAttributeValueChangeEventModel = void 0;
const ProductOrderAttributeValueChangeEventPayload_model_1 = require("./ProductOrderAttributeValueChangeEventPayload.model");
exports.ProductOrderAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOrderAttributeValueChangeEventPayload_model_1.ProductOrderAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOrderAttributeValueChangeEvent.model.js.map