"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderCreateEventModel = void 0;
const CancelServiceOrderCreateEventPayload_model_1 = require("./CancelServiceOrderCreateEventPayload.model");
exports.CancelServiceOrderCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CancelServiceOrderCreateEventPayload_model_1.CancelServiceOrderCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CancelServiceOrderCreateEvent.model.js.map