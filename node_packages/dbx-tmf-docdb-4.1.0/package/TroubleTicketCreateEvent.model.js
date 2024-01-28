"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketCreateEventModel = void 0;
const TroubleTicketCreateEventPayload_model_1 = require("./TroubleTicketCreateEventPayload.model");
exports.TroubleTicketCreateEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: TroubleTicketCreateEventPayload_model_1.TroubleTicketCreateEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=TroubleTicketCreateEvent.model.js.map