"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderStateChangeEventModel = void 0;
const ProductOrderStateChangeEventPayload_model_1 = require("./ProductOrderStateChangeEventPayload.model");
exports.ProductOrderStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOrderStateChangeEventPayload_model_1.ProductOrderStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOrderStateChangeEvent.model.js.map