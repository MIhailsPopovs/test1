"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDeleteEventModel = void 0;
const CustomerDeleteEventPayload_model_1 = require("./CustomerDeleteEventPayload.model");
exports.CustomerDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CustomerDeleteEventPayload_model_1.CustomerDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CustomerDeleteEvent.model.js.map