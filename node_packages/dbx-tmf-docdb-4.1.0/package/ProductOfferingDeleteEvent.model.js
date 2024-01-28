"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingDeleteEventModel = void 0;
const ProductOfferingDeleteEventPayload_model_1 = require("./ProductOfferingDeleteEventPayload.model");
exports.ProductOfferingDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOfferingDeleteEventPayload_model_1.ProductOfferingDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOfferingDeleteEvent.model.js.map