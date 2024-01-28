"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDeleteEventModel = void 0;
const CategoryDeleteEventPayload_model_1 = require("./CategoryDeleteEventPayload.model");
exports.CategoryDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CategoryDeleteEventPayload_model_1.CategoryDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CategoryDeleteEvent.model.js.map