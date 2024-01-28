"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationDeleteEventModel = void 0;
const ProductSpecificationDeleteEventPayload_model_1 = require("./ProductSpecificationDeleteEventPayload.model");
exports.ProductSpecificationDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductSpecificationDeleteEventPayload_model_1.ProductSpecificationDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductSpecificationDeleteEvent.model.js.map