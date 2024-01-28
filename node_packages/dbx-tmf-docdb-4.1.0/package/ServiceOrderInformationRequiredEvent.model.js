"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderInformationRequiredEventModel = void 0;
const ServiceOrderInformationRequiredEventPayload_model_1 = require("./ServiceOrderInformationRequiredEventPayload.model");
exports.ServiceOrderInformationRequiredEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: ServiceOrderInformationRequiredEventPayload_model_1.ServiceOrderInformationRequiredEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=ServiceOrderInformationRequiredEvent.model.js.map