"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationCreateEventModel = void 0;
const ProductSpecificationCreateEventPayload_model_1 = require("./ProductSpecificationCreateEventPayload.model");
exports.ProductSpecificationCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductSpecificationCreateEventPayload_model_1.ProductSpecificationCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductSpecificationCreateEvent.model.js.map