"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderStateChangeEventModel = void 0;
const CancelServiceOrderStateChangeEventPayload_model_1 = require("./CancelServiceOrderStateChangeEventPayload.model");
exports.CancelServiceOrderStateChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CancelServiceOrderStateChangeEventPayload_model_1.CancelServiceOrderStateChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CancelServiceOrderStateChangeEvent.model.js.map