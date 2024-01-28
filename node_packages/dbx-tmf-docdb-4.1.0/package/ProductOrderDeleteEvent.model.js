"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderDeleteEventModel = void 0;
const ProductOrderDeleteEventPayload_model_1 = require("./ProductOrderDeleteEventPayload.model");
exports.ProductOrderDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOrderDeleteEventPayload_model_1.ProductOrderDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOrderDeleteEvent.model.js.map