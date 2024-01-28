"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmAttributeValueChangeEventModel = void 0;
const AlarmAttributeValueChangeEventPayload_model_1 = require("./AlarmAttributeValueChangeEventPayload.model");
exports.AlarmAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: AlarmAttributeValueChangeEventPayload_model_1.AlarmAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=AlarmAttributeValueChangeEvent.model.js.map