"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryStateChangeEventModel = void 0;
const CategoryStateChangeEventPayload_model_1 = require("./CategoryStateChangeEventPayload.model");
exports.CategoryStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CategoryStateChangeEventPayload_model_1.CategoryStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CategoryStateChangeEvent.model.js.map