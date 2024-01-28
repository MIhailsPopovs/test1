"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryDeleteEventModel = void 0;
const ServiceCategoryDeleteEventPayload_model_1 = require("./ServiceCategoryDeleteEventPayload.model");
exports.ServiceCategoryDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceCategoryDeleteEventPayload_model_1.ServiceCategoryDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceCategoryDeleteEvent.model.js.map