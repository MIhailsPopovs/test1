"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingStateChangeEventModel = void 0;
const ProductOfferingStateChangeEventPayload_model_1 = require("./ProductOfferingStateChangeEventPayload.model");
exports.ProductOfferingStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOfferingStateChangeEventPayload_model_1.ProductOfferingStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOfferingStateChangeEvent.model.js.map