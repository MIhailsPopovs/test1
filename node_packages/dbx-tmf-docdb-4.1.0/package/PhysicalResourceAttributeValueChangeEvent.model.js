"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalResourceAttributeValueChangeEventModel = void 0;
const PhysicalResourceAttributeValueChangeEventPayload_model_1 = require("./PhysicalResourceAttributeValueChangeEventPayload.model");
exports.PhysicalResourceAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PhysicalResourceAttributeValueChangeEventPayload_model_1.PhysicalResourceAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PhysicalResourceAttributeValueChangeEvent.model.js.map