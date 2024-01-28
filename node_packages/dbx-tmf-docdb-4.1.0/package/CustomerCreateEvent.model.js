"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateEventModel = void 0;
const CustomerCreateEventPayload_model_1 = require("./CustomerCreateEventPayload.model");
exports.CustomerCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CustomerCreateEventPayload_model_1.CustomerCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CustomerCreateEvent.model.js.map