"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderCreateEventModel = void 0;
const ProductOrderCreateEventPayload_model_1 = require("./ProductOrderCreateEventPayload.model");
exports.ProductOrderCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOrderCreateEventPayload_model_1.ProductOrderCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOrderCreateEvent.model.js.map