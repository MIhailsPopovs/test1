"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceStateChangeEventModel = void 0;
const ProductOfferingPriceStateChangeEventPayload_model_1 = require("./ProductOfferingPriceStateChangeEventPayload.model");
exports.ProductOfferingPriceStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOfferingPriceStateChangeEventPayload_model_1.ProductOfferingPriceStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOfferingPriceStateChangeEvent.model.js.map