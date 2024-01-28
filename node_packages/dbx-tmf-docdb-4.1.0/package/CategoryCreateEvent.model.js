"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateEventModel = void 0;
const CategoryCreateEventPayload_model_1 = require("./CategoryCreateEventPayload.model");
exports.CategoryCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CategoryCreateEventPayload_model_1.CategoryCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CategoryCreateEvent.model.js.map