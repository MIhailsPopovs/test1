"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryAttributeValueChangeEventModel = void 0;
const CategoryAttributeValueChangeEventPayload_model_1 = require("./CategoryAttributeValueChangeEventPayload.model");
exports.CategoryAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CategoryAttributeValueChangeEventPayload_model_1.CategoryAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CategoryAttributeValueChangeEvent.model.js.map