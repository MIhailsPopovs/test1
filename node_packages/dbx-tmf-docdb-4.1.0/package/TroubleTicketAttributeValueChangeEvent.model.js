"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketAttributeValueChangeEventModel = void 0;
const TroubleTicketAttributeValueChangeEventPayload_model_1 = require("./TroubleTicketAttributeValueChangeEventPayload.model");
exports.TroubleTicketAttributeValueChangeEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: TroubleTicketAttributeValueChangeEventPayload_model_1.TroubleTicketAttributeValueChangeEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=TroubleTicketAttributeValueChangeEvent.model.js.map