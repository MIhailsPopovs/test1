"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAttributeValueChangeEventModel = void 0;
const CustomerAttributeValueChangeEventPayload_model_1 = require("./CustomerAttributeValueChangeEventPayload.model");
exports.CustomerAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CustomerAttributeValueChangeEventPayload_model_1.CustomerAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CustomerAttributeValueChangeEvent.model.js.map