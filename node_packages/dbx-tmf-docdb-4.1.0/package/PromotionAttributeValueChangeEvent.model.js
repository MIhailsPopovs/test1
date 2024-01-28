"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionAttributeValueChangeEventModel = void 0;
const PromotionAttributeValueChangeEventPayload_model_1 = require("./PromotionAttributeValueChangeEventPayload.model");
exports.PromotionAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PromotionAttributeValueChangeEventPayload_model_1.PromotionAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PromotionAttributeValueChangeEvent.model.js.map