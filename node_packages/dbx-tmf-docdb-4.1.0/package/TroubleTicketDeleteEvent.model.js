"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketDeleteEventModel = void 0;
const TroubleTicketDeleteEventPayload_model_1 = require("./TroubleTicketDeleteEventPayload.model");
exports.TroubleTicketDeleteEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: TroubleTicketDeleteEventPayload_model_1.TroubleTicketDeleteEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=TroubleTicketDeleteEvent.model.js.map