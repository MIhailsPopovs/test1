"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderAttributeValueChangeEventModel = void 0;
const ServiceOrderAttributeValueChangeEventPayload_model_1 = require("./ServiceOrderAttributeValueChangeEventPayload.model");
exports.ServiceOrderAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceOrderAttributeValueChangeEventPayload_model_1.ServiceOrderAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceOrderAttributeValueChangeEvent.model.js.map