"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryChangeEventModel = void 0;
const ServiceCategoryChangeEventPayload_model_1 = require("./ServiceCategoryChangeEventPayload.model");
exports.ServiceCategoryChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCategoryChangeEventPayload_model_1.ServiceCategoryChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCategoryChangeEvent.model.js.map