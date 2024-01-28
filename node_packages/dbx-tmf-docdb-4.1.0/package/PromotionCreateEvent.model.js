"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCreateEventModel = void 0;
const PromotionCreateEventPayload_model_1 = require("./PromotionCreateEventPayload.model");
exports.PromotionCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PromotionCreateEventPayload_model_1.PromotionCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PromotionCreateEvent.model.js.map