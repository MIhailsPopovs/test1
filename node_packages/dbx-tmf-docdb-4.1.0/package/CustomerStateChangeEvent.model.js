"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerStateChangeEventModel = void 0;
const CustomerStateChangeEventPayload_model_1 = require("./CustomerStateChangeEventPayload.model");
exports.CustomerStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CustomerStateChangeEventPayload_model_1.CustomerStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CustomerStateChangeEvent.model.js.map