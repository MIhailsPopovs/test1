"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceCreateEventModel = void 0;
const ProductOfferingPriceCreateEventPayload_model_1 = require("./ProductOfferingPriceCreateEventPayload.model");
exports.ProductOfferingPriceCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOfferingPriceCreateEventPayload_model_1.ProductOfferingPriceCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOfferingPriceCreateEvent.model.js.map