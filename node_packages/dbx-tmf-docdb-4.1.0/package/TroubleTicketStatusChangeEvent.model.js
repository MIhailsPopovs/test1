"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketStatusChangeEventModel = void 0;
const TroubleTicketStatusChangeEventPayload_model_1 = require("./TroubleTicketStatusChangeEventPayload.model");
exports.TroubleTicketStatusChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: TroubleTicketStatusChangeEventPayload_model_1.TroubleTicketStatusChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    href: String,
    id: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=TroubleTicketStatusChangeEvent.model.js.map