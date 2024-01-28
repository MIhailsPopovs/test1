"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionInformationRequiredEventModel = void 0;
const PromotionInformationRequiredEventPayload_model_1 = require("./PromotionInformationRequiredEventPayload.model");
exports.PromotionInformationRequiredEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PromotionInformationRequiredEventPayload_model_1.PromotionInformationRequiredEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PromotionInformationRequiredEvent.model.js.map