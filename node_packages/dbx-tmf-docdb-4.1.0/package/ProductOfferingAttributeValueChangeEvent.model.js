"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingAttributeValueChangeEventModel = void 0;
const ProductOfferingAttributeValueChangeEventPayload_model_1 = require("./ProductOfferingAttributeValueChangeEventPayload.model");
exports.ProductOfferingAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOfferingAttributeValueChangeEventPayload_model_1.ProductOfferingAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOfferingAttributeValueChangeEvent.model.js.map