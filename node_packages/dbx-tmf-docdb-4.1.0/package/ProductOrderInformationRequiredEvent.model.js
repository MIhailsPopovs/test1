"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderInformationRequiredEventModel = void 0;
const ProductOrderInformationRequiredEventPayload_model_1 = require("./ProductOrderInformationRequiredEventPayload.model");
exports.ProductOrderInformationRequiredEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ProductOrderInformationRequiredEventPayload_model_1.ProductOrderInformationRequiredEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ProductOrderInformationRequiredEvent.model.js.map