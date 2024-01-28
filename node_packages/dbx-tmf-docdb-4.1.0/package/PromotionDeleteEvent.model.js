"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionDeleteEventModel = void 0;
const PromotionDeleteEventPayload_model_1 = require("./PromotionDeleteEventPayload.model");
exports.PromotionDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: PromotionDeleteEventPayload_model_1.PromotionDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=PromotionDeleteEvent.model.js.map