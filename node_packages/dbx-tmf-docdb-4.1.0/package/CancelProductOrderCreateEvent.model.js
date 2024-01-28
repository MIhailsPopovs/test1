"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderCreateEventModel = void 0;
const CancelProductOrderCreateEventPayload_model_1 = require("./CancelProductOrderCreateEventPayload.model");
exports.CancelProductOrderCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: CancelProductOrderCreateEventPayload_model_1.CancelProductOrderCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=CancelProductOrderCreateEvent.model.js.map