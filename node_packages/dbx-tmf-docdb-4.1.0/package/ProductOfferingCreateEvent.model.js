"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingCreateEventModel = void 0;
const ProductOfferingCreateEventPayload_model_1 = require("./ProductOfferingCreateEventPayload.model");
exports.ProductOfferingCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOfferingCreateEventPayload_model_1.ProductOfferingCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOfferingCreateEvent.model.js.map