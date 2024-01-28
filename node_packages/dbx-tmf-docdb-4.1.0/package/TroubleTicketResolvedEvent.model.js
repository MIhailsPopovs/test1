"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketResolvedEventModel = void 0;
const TroubleTicketResolvedEventPayload_model_1 = require("./TroubleTicketResolvedEventPayload.model");
exports.TroubleTicketResolvedEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: TroubleTicketResolvedEventPayload_model_1.TroubleTicketResolvedEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=TroubleTicketResolvedEvent.model.js.map