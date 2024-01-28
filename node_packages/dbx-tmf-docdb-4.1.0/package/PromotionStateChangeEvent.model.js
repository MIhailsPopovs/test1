"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionStateChangeEventModel = void 0;
const PromotionStateChangeEventPayload_model_1 = require("./PromotionStateChangeEventPayload.model");
exports.PromotionStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PromotionStateChangeEventPayload_model_1.PromotionStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PromotionStateChangeEvent.model.js.map