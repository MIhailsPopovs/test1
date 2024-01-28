"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationAttributeValueChangeEventModel = void 0;
const ProductSpecificationAttributeValueChangeEventPayload_model_1 = require("./ProductSpecificationAttributeValueChangeEventPayload.model");
exports.ProductSpecificationAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductSpecificationAttributeValueChangeEventPayload_model_1.ProductSpecificationAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductSpecificationAttributeValueChangeEvent.model.js.map