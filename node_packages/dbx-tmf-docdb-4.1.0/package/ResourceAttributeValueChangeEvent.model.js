"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceAttributeValueChangeEventModel = void 0;
const ResourceAttributeValueChangeEventPayload_model_1 = require("./ResourceAttributeValueChangeEventPayload.model");
exports.ResourceAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ResourceAttributeValueChangeEventPayload_model_1.ResourceAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ResourceAttributeValueChangeEvent.model.js.map