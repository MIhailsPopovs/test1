"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationStateChangeEventModel = void 0;
const ProductSpecificationStateChangeEventPayload_model_1 = require("./ProductSpecificationStateChangeEventPayload.model");
exports.ProductSpecificationStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductSpecificationStateChangeEventPayload_model_1.ProductSpecificationStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductSpecificationStateChangeEvent.model.js.map