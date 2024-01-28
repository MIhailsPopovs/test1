"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderStateChangeEventModel = void 0;
const CancelProductOrderStateChangeEventPayload_model_1 = require("./CancelProductOrderStateChangeEventPayload.model");
exports.CancelProductOrderStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CancelProductOrderStateChangeEventPayload_model_1.CancelProductOrderStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CancelProductOrderStateChangeEvent.model.js.map